export class GingerBreadHouse extends Entity {
    isGrabbed: boolean = false
    
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)
        var shape = new GLTFShape("models/GingerBreadHouse.glb")
        shape.isPointerBlocker = false
        this.addComponent(shape)
        this.addComponent(transform)       
    }
}