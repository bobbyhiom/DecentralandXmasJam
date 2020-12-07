import { SnowMan } from "./snowman"

export class Sprout
 extends Entity {    
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)
        this.addComponent(new GLTFShape("models/Sprout.gltf"))
        this.addComponent(transform)

        // Create AudioClip object, holding audio file
        const clip = new AudioClip("sounds/collect.wav")

        // Create AudioSource component, referencing `clip`
        const source = new AudioSource(clip)

        // Add AudioSource component to entity
        this.addComponent(source)

        // Play sound
        source.playing = false

        let context = this;

        this.addComponent(
            new OnPointerDown(
                ()=> {
                    //this.getComponent(AudioSource).playOnce();
                    SnowMan.playCollect();
                    SnowMan.sproutCount += 1;
                    engine.removeEntity(this);
                },
                {
                    button: ActionButton.PRIMARY,
                    hoverText: "Pick Up",
                    distance: 5
                }
            )
        )
    }

    public die(){
        engine.removeEntity(this);
    }
}