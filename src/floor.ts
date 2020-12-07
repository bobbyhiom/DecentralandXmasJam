export class Floor extends Entity {   
    constructor() {
        super()
        engine.addEntity(this)
        this.addComponent(new GLTFShape("models/Floor.gltf"))
        this.addComponent( new Transform({ 
            position: new Vector3(-51.8, 0.1, 8) 
        }))
    }
}