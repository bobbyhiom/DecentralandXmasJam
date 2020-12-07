export class Debris
 extends Entity {
    isGrabbed: boolean = false
    
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)
        var shape = new GLTFShape("models/Debris.gltf")
        shape.isPointerBlocker = false
        this.addComponent(shape)

        this.addComponent(transform)

       
    }
}