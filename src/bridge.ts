export class Bridge
 extends Entity {
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)

        var shape = new GLTFShape("models/Bridge.gltf")
        shape.isPointerBlocker = false
        this.addComponent(shape)
        this.addComponent(transform)

       
    }
}