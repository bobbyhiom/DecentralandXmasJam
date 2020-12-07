import { SlerpRotate } from "./Slurp/SlerpRotate"
import { SlerpData } from "./Slurp/SlerpData"

export class Door
 extends Entity {   
    update(dt: number) {
        let transform = this.getParent().getComponent(Transform)
        transform.rotate(Vector3.Up(), dt)
    }
    public isOpen: boolean

    constructor(transform: Transform) {
        super()
        this.isOpen = false;
        // Pivot /////////////////////////////////
        // Create the pivot entity
        const pivot = new Entity()

        // Position the pivot entity on the pivot point of the rotation
        pivot.addComponent(transform)

      //  pivot.addComponent(new BoxShape())

        // add pivot entity
        engine.addEntity(pivot)
        // Set pivot as the parent
        this.setParent(pivot)


        // Pivot /////////////////////////////////

        // Create AudioClip object, holding audio file
        const clip = new AudioClip("sounds/door.wav")

        // Create AudioSource component, referencing `clip`
        const source = new AudioSource(clip)

        // Add AudioSource component to entity
        this.addComponent(source)

        // Play sound
        source.playing = false

        engine.addEntity(this)

        this.addComponent(new GLTFShape("models/Door.gltf"))
        //this.addComponent(transform)
        this.addComponent(new Transform({
            position: new Vector3(-2,0,-0.9)
        }));

        this.addComponent(
            new OnClick((): void => {
              this.toggleDoor()
            })
          )

        pivot.addComponent(new SlerpData())

        pivot.getComponent(SlerpData).originRot = Quaternion.Euler(0, 0, 0)
        pivot.getComponent(SlerpData).targetRot = Quaternion.Euler(0, 0, 0)
        pivot.getComponent(SlerpData).fraction = 0;
        pivot.getComponent(SlerpData).speed = 8;

       // this.getComponent(SlerpData).targetRot = Quaternion.Euler(0, 90, 0)
        
    }

    public openDoor(playAudio = true): void {
        this.isOpen = true;
       // let transform = this.getParent().getComponent(Transform)
       // transform.rotate(Vector3.Up(), -90)
       this.getParent().getComponent(SlerpData).originRot = Quaternion.Euler(0, 0, 0)
       this.getParent().getComponent(SlerpData).targetRot = Quaternion.Euler(0, 90, 0)
       this.getParent().getComponent(SlerpData).fraction = 0;
        
    }

    public closeDoor(playAudio = true): void {
        this.isOpen = false;
        //let transform = this.getParent().getComponent(Transform)
        //transform.rotate(Vector3.Up(), 90)
        this.getParent().getComponent(SlerpData).originRot = Quaternion.Euler(0, 90, 0)
        this.getParent().getComponent(SlerpData).targetRot = Quaternion.Euler(0, 0, 0)
        this.getParent().getComponent(SlerpData).fraction = 0;
    }

    public toggleDoor(playAudio = true): void {
      this.getComponent(AudioSource).playOnce();
        if (this.isOpen) {
          this.closeDoor(playAudio)
        } else {
          this.openDoor(playAudio)
        }
      }
}