/// --- Set up a system ---

import { Potion } from "./potion"
import { Cauldren } from "./cauldren"
import { Trailer } from "./trailer"
import { GingerBreadHouse } from "./gingerbreadhouse"
import { Present } from "./present"
import { AnimationTest } from "./animationtest"
import { Floor } from "./floor"
import { ChocolateRiver } from "./chocolateriver"
import { SnowFall } from "./snowfall"
import { Door } from "./door"
import { Tree } from "./tree"
import { ChristmasTree } from "./christmastree"
import { SlerpRotate } from "./Slurp/SlerpRotate"
import { ScrollTexture } from "./Scroller/ScrollTexture"
import { SnowDrop } from "./SnowSystem/SnowDrop"
import { SnowGenerator } from "./SnowSystem/SnowGenerator"
import { Bridge } from "./bridge"
import { SnowMan } from "./snowman"
import { CoffeeTalk } from "./coffeetalk"
import { Grinch } from "./grinch"
import { SnowBallPile } from "./snowballpile"
import { CandyCaine } from "./candycaine"
import { Debris } from "./debris"
import { Sprout } from "./sprout"
import { SnowFlake } from "./snowflake"

const canvas = new UICanvas()

// Create a textShape component, setting the canvas as parent
const text = new UIText(canvas)

text.value = ""

text.fontSize = 20
text.positionY = -20
text.positionX = -400


class UISystem implements ISystem {




  constructor() {
      
  }
  
  //Executed ths function on every frame
  update(dt: number) {
    SnowMan.seconds -= dt;
    let sproutWord = " sprouts";

    if(SnowMan.sproutCount==11){
      sproutWord = " sprout";
    }

    if(SnowMan.sproutCount==12){
      text.value = "YOU WIN - Christmas is saved!"
    }else if(SnowMan.seconds>0) {
        text.value = SnowMan.seconds.toFixed(0) + "s left to collect " + (12 - SnowMan.sproutCount) +  sproutWord;
    }
    else if(SnowMan.gameStarted) {
      text.value = "YOU LOST - Talk to the Snowman to try again"
    }
  }
}

// Add system to engine
engine.addSystem(new UISystem())


// Configuration
const Z_OFFSET = 1
const Y_OFFSET = 0.6
const GROUND_HEIGHT = 1.85

const camera = Camera.instance;

// Add system to engine
engine.addSystem(new SlerpRotate());
engine.addSystem(new ScrollTexture());
engine.addSystem(new SnowDrop());
engine.addSystem(new SnowGenerator());

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}

// Add a new instance of the system to the engine
//engine.addSystem(new RotatorSystem())



// Potion
/*const potion = new Potion(
  new GLTFShape("models/potion.glb"),
  new Transform({ 
    position: new Vector3(2, GROUND_HEIGHT, 1) 
  })
)*/

// Trees
new Tree(
  new Transform({ 
    position: new Vector3(20, GROUND_HEIGHT + 1.2 , 35),
    rotation: new Quaternion(0 , 180 , 0  ,30),
  })
)
new Tree(
  new Transform({ 
    position: new Vector3(12, GROUND_HEIGHT + 1.2 , 40),
    rotation: new Quaternion(0 , 180 , 0  ,-90),
  })
)
new Tree(
  new Transform({ 
    position: new Vector3(-2, GROUND_HEIGHT + 1.2 , 35),
    rotation: new Quaternion(0 , 180 , 0  ,40),
  })
)
new Tree(
  new Transform({ 
    position: new Vector3(-9, GROUND_HEIGHT + 1.2 , 38),
    rotation: new Quaternion(0 , 180 , 0  ,-30),
  })
)
new Tree(
  new Transform({ 
    position: new Vector3(-5, GROUND_HEIGHT + 1.3 , 28),
    rotation: new Quaternion(0 , 180 , 0  ,20),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(12, GROUND_HEIGHT + 1.3 , 32),
    rotation: new Quaternion(0 , 180 , 0  ,80),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(25, GROUND_HEIGHT + 1.4 , 5),
    rotation: new Quaternion(0 , 180 , 0  ,80),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(20, GROUND_HEIGHT + 1.2 , -9),
    rotation: new Quaternion(0 , 180 , 0  ,12),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(22, GROUND_HEIGHT + 1.2 , -2),
    rotation: new Quaternion(0 , 180 , 0  ,270),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(8, GROUND_HEIGHT + 1.2 , -2),
    rotation: new Quaternion(0 , 180 , 0  ,-30),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(-2, GROUND_HEIGHT + 1.2 , -6),
    rotation: new Quaternion(0 , 180 , 0  ,-20),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(-8, GROUND_HEIGHT + 1.2 , -10),
    rotation: new Quaternion(0 , 180 , 0  ,-20),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(-2, GROUND_HEIGHT + 1.2 , 10),
    rotation: new Quaternion(0 , 180 , 0  ,60),
  })
)

new Tree(
  new Transform({ 
    position: new Vector3(20, GROUND_HEIGHT + 1.7 , 5),
    rotation: new Quaternion(0 , 180 , 0  ,60),
  })
)



 
// Snow man
const snowman = new SnowMan(
  new Transform({ 
    position: new Vector3(16, GROUND_HEIGHT, 2),
    rotation: new Quaternion(0 , 180 , 0  ,90),
  })
)

// Grinch
const grinch = new Grinch(
  new Transform({ 
    position: new Vector3(3, GROUND_HEIGHT, 6) 
  })
)

// CoffeeTalk
const coffeeTalk = new CoffeeTalk(
  new Transform({ 
    position: new Vector3(4.5, GROUND_HEIGHT + 0.3, 36) 
  })
)

// Tree
const christmasTree = new ChristmasTree(
  new Transform({ 
    position: new Vector3(8, GROUND_HEIGHT, 8) 
  })
)

// Cauldren
/*
const cauldren = new Cauldren(
  new GLTFShape("models/GingerBreadWithWalking.gltf"),
  new Transform({ 
    position: new Vector3(6, GROUND_HEIGHT, 2) 
  })
)
*/

// Trailer
//const trailer = new Trailer(
//  new GLTFShape("models/trailer.glb"),
 // new Transform({ 
//    position: new Vector3(8, GROUND_HEIGHT, 10) 
//  })
//)
/*
// Ginger Bread Man
const gingerBreadMan = new GingerBreadMan(
  new Transform({ 
    position: new Vector3(4, GROUND_HEIGHT, 2) 
  })
)
*/
// Ginger Bread House
const gingerBreadHouse = new GingerBreadHouse(
  new Transform({ 
    position: new Vector3(4, GROUND_HEIGHT, 30) 
  })
)

/*
const gingerBreadHouse = new GingerBreadHouse(
  new Transform({ 
    position: new Vector3(4, GROUND_HEIGHT, 6) 
  })
)
*/

// Door for the house
const door = new Door(
  new Transform({
    position: new Vector3(6, GROUND_HEIGHT, 30.9)
  })
)

// Presents
new Present(
  new Transform({ 
    position: new Vector3(2, GROUND_HEIGHT + 1, 2) 
  })
)

new Present(
  new Transform({ 
    position: new Vector3(-1, GROUND_HEIGHT + 1, 1),
    rotation: new Quaternion(0 , 90 , 0  ,0 ),
  })
)

// near the house
new Present(
  new Transform({ 
    position: new Vector3(-1, GROUND_HEIGHT + 1, 30)//,
    //rotation: new Quaternion(0 , 90 , 0  ,0 ),
  })
)

new Debris(
  new Transform({ 
    position: new Vector3(20, GROUND_HEIGHT + 0.3, 1)
  })
)

// Bridge
const bridge = new Bridge(
  new Transform({ 
    position: new Vector3(12, GROUND_HEIGHT + 0.5, 11) 
  })
)

// SnowBall piles
new SnowBallPile(
  new Transform({ 
    position: new Vector3(7, GROUND_HEIGHT + 0.12, -6) 
  })
)

new SnowBallPile(
  new Transform({ 
    position: new Vector3(20, GROUND_HEIGHT + 0.12, 30) 
  })
)

new SnowBallPile(
  new Transform({ 
    position: new Vector3(-3, GROUND_HEIGHT + 0.12, 10) 
  })
)

new CandyCaine(
  new Transform({ 
    position: new Vector3(9, GROUND_HEIGHT + 1.3, 18) 
  }) 
)
new CandyCaine(
  new Transform({ 
    position: new Vector3(15, GROUND_HEIGHT + 1.3 , 18),
    rotation: new Quaternion(0 , 180 , 0  ,0 ),
  })
)

const floor = new Floor();

const chocolateriver = new ChocolateRiver();


// Coordinates of path to patrol
const point1 = new Vector3(5, 1.7, 24)
const point2 = new Vector3(24, 1.7, 24)
const path: Vector3[] = [point1, point2]

const TURN_TIME = 0.15


// LerpData component
@Component("lerpData")
export class LerpData {
  array: Vector3[] = path
  origin: number = 0
  target: number = 1
  fraction: number = 0
}

// Rotate component
@Component("timeOut")
export class TimeOut {
  timeLeft: number
  constructor( time: number){
    this.timeLeft = time
  }
}

export const paused = engine.getComponentGroup(TimeOut)


let gnark = new Entity()
gnark.addComponent(new Transform({
 position:  new Vector3(24, 1.7, 24),
 rotation: new Quaternion(0 , 90 , 0  ,90),
}))

gnark.addComponent(new GLTFShape("models/NewWalk.gltf"));

gnark.addComponent(new LerpData())

engine.addEntity(gnark)

export class GnarkWalk {
  update(dt: number) {
    if (!gnark.hasComponent(TimeOut)){
      let transform = gnark.getComponent(Transform)
      let path = gnark.getComponent(LerpData)
      if (path.fraction < 1) {
        path.fraction += dt/12
        transform.position = Vector3.Lerp(
          path.array[path.origin],
          path.array[path.target],
          path.fraction
        ) 
      } else {
        path.origin = path.target
        path.target += 1
        if (path.target >= path.array.length) {
          path.target = 0
        }
        path.fraction = 0
        transform.lookAt(path.array[path.target])
        gnark.addComponent(new TimeOut(TURN_TIME))
      }
    }
  }
}

engine.addSystem(new GnarkWalk())

// Wait System
export class WaitSystem {
  update(dt: number) {
    for (let ent of paused.entities){
      let time = ent.getComponentOrNull(TimeOut)
      if (time){
        if (time.timeLeft > 0) {
          time.timeLeft -= dt
        } else {
          ent.removeComponent(TimeOut)
        }
      }
    }
  }
}

engine.addSystem(new WaitSystem())

function distance(pos1: Vector3, pos2: Vector3): number {
  const a = pos1.x - pos2.x
  const b = pos1.z - pos2.z
  return a * a + b * b
}

