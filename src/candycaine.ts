export class CandyCaine
 extends Entity {
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)
        this.addComponent(new GLTFShape("models/CandyCaine.gltf"))
        this.addComponent(transform)

       
    }
}