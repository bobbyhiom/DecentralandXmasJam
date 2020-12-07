export class SnowBallPile
 extends Entity {
    isGrabbed: boolean = false
    
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)
        this.addComponent(new GLTFShape("models/SnowBallPile.gltf"))
        this.addComponent(transform)

       
    }
}