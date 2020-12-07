export class ChristmasTree extends Entity {   
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)
        this.addComponent(new GLTFShape("models/ChristmasTree.gltf"))
        this.addComponent(transform)
    }
}