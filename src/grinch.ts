import { NPC } from '../node_modules/@dcl/npc-utils/index'
import { Dialog } from '../node_modules/@dcl/npc-utils/utils/types'

export class Grinch extends NPC {
    isGrabbed: boolean = false
    
    constructor(transform: Transform) {
        super(transform,
            "models/GingerbreadGrinch.gltf",
            () => {
                this.talk(MyDialog, 0)
                this.playAnimation("Armature.002Action", false, 2)
             },
             {
              faceUser: true,
              reactDistance: 1,
              portrait: {
                path: 'images/portraits/EvilGingerBread.png',
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

            this.playAnimation("Armature.002Action", false, 2)

            


        engine.addEntity(this)       
    }
}


export let MyDialog: Dialog[] = [
  {
    text: 'Would you like to play a game?',
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: 1 },
      { label: 'Not now', goToDialog: 2 },
    ],
  },
  {
    text: 'Okay, you go hide and in an hour I will come looking for you.',
    isEndOfDialog: true,
  },
  {
    text: 'Good, go away.',
    isEndOfDialog: true,
  },
]