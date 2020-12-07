import { ScrollData } from "./Scroller/ScrollData"

export class ChocolateRiver extends Entity { 

    constructor() {
        super()
     //   this.addComponent(new GLTFShape("models/ChocolateRiver.gltf"))
        this.addComponent( new Transform({ 
            position: new Vector3(7.8, 0.7, 20),
            rotation: Quaternion.Euler(90, 0, 0), 
            scale: new Vector3(44,46,1)
        }));

        this.addComponent(new ScrollData());

        this.getComponent(ScrollData).speed = 0.01;
        this.getComponent(ScrollData).currentAmount = 0;
        this.getComponent(ScrollData).size = 10;

        const myPlaneShape = new PlaneShape();

        myPlaneShape.withCollisions = false;
        
        this.addComponent(myPlaneShape)
        

        // Create texture
        const chocolateRiverTextureAlbedo = new Texture("materials/ChocolateRiver.png",{wrap:1});
        const chocolateRiverNormal = new Texture("materials/ChocolateRiver_nrm.png",{wrap:1})

        // Create material
        let chocolateRiverMat = new Material()
        chocolateRiverMat.metallic = 0.1
        chocolateRiverMat.roughness = 0.9
        chocolateRiverMat.albedoTexture = chocolateRiverTextureAlbedo;
        chocolateRiverMat.bumpTexture = chocolateRiverNormal;

        // Add material to wheels
        this.addComponent(chocolateRiverMat);

        engine.addEntity(this);
    }
}