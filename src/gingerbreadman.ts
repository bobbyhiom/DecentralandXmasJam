/*
// Coordinates of path to patrol
const point1 = new Vector3(8, 0, 8)
const point2 = new Vector3(8, 0, 24)
const point3 = new Vector3(24, 0, 24)
const point4 = new Vector3(24, 0, 8)
const path: Vector3[] = [point1, point2, point3, point4]

const TURN_TIME = 0.9


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
 position: new Vector3(5, 0, 5)
}))

gnark.addComponent(new GLTFShape("models/GingerBreadMan.glb"));

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
*/