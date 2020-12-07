export class Tree extends Entity {   
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)
        this.addComponent(new GLTFShape("models/GingerBreadTree.gltf"))
        this.addComponent(transform)
    }
}