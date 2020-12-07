import { NPC } from '../node_modules/@dcl/npc-utils/index'
import { Dialog } from '../node_modules/@dcl/npc-utils/utils/types'
import { Sprout } from './sprout'

let sprouts = [];

export class SnowMan extends NPC {
    isGrabbed: boolean = false
    static me: Entity;
    static sproutCount:number;
    static seconds: number;
    static gameStarted: boolean = false;

    constructor(transform: Transform) {
        super(transform,
            "models/SnowMan.gltf",
            () => {
                this.talk(MyDialog, 0)
                this.playAnimation("SnowManIdle", false, 2)
             },
             {
              faceUser: true,
              reactDistance: 5,
              portrait: {
                path: 'images/portraits/Snowman.png',
                height: 220,
                width: 220,
                offsetX: 80,
                section: {
                  sourceHeight: 512,
                  sourceWidth: 512,
                },
              },
              onWalkAway: () => {
                //alice.playAnimation('Goodbye', true, 2)
              },
            }
            )

            this.playAnimation("SnowManIdle", false, 2)

        engine.addEntity(this);      
        
        // Create AudioClip object, holding audio file
        const clip = new AudioClip("sounds/collect.wav")

        // Create AudioSource component, referencing `clip`
        const source = new AudioSource(clip)

        // Add AudioSource component to entity
        this.addComponent(source)

        // Play sound
        source.playing = false

        SnowMan.me = this;


    }

    static playCollect() {
      SnowMan.me.getComponent(AudioSource).playOnce();
    }
}


export let MyDialog: Dialog[] = [
  {
    text: 'Welcome to Christmas Land',
  },
  {
    text: 'We are having some trouble with the Gingerbread Grinch, who is trying to ruin the holiday',
  },
  {
    text: 'Would you help us to save Christmas?',
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: 4 },
      { label: 'Not now', goToDialog: 3 },
    ],
  },
  {
    text: 'Oh, okay :(',
    isEndOfDialog: true,
  },
  {
    text: 'Excellent! Thank you.'
  },
  {
    text: 'The Gingerbread Grinch hates people enjoying the candy of our land and has hidden 12 smelly Brussel Sprouts nearby. Yuck!'
  },
  {
    text: 'You only have 3 minutes to find all the Brussel Sprouts before our visitors arrive, are you ready?',
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: 7 },
      { label: 'Not yet', goToDialog: 8 },
    ],
  },
  {
    text: 'Great, good luck!',
    isEndOfDialog: true,
    triggeredByNext: () => {
      //alice.playAnimation('Goodbye', true, 2)
      // start game
      startGame();
    },
  },
  {
    text: 'Please come back when you can',
    isEndOfDialog: true,
  },
]

function startGame(){

  SnowMan.gameStarted = true;
  SnowMan.sproutCount = 0;
  SnowMan.seconds = 180;
  // Delete any current sprouts
  for(let sprout of sprouts) {
    sprout.die();
  }
  sprouts = [];
  
  // Add sprouts


  // back tree
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(20,1.85,-9.5)})
  ));
  // Near christmas tree and presents
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(2.3,2.85,1)})
  ));
  // On top of present near the tree
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(-1,1.85,1)})
  ));
  // Near the debris
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(19.9 ,2.34,1.2)})
  ));
  // On the bridge
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(12 ,2.5,12)})
  ));
  // In the river 1
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(16.9 ,0.7,14.5)})
  ));
  // In the river 2
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(2 ,0.7,12.3)})
  ));
  // Near the pile near the trees
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(20.2 ,2,30)})
  ));
  // Presents near the house
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(-1.15 ,2,30.5)})
  ));
  // House Window
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(2.6 ,3.18  ,31 )})
  ));
  // Coffee Table
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(3.9,3.3  ,36 )})
  ));

  // Behind the house
  sprouts.push(new Sprout(
    new Transform({ position: new Vector3(7,1.85  ,37.8 )})
  ));

  
}