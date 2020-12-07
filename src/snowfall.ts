import { ScrollData } from "./Scroller/ScrollData"

export class SnowFall extends Entity { 

    constructor(transform: Transform) {
        super()
        this.addComponent( new Transform({ 
            position: transform.position,
            rotation: Quaternion.Euler(0, 0, -90), 
            scale: new Vector3(46,46,1)
        }));        


        this.addComponent(new ScrollData());

        this.getComponent(ScrollData).speed = 0.03;
        this.getComponent(ScrollData).currentAmount = 0;
        this.getComponent(ScrollData).size = 50;

        const myPlaneShape = new PlaneShape();

        myPlaneShape.withCollisions = false;
        
        this.addComponent(myPlaneShape)
        

        // Create texture
        const snowTextureAlbedo = new Texture("materials/SnowAlbedo.png",{wrap:1});
      //  const chocolateRiverNormal = new Texture("materials/ChocolateRiver_nrm.png",{wrap:1})

        // Create material
        let snowMat = new Material();
        snowMat.metallic = 0.1;
        snowMat.roughness = 0.9;
        snowMat.albedoTexture = snowTextureAlbedo;
        snowMat.alphaTexture = snowTextureAlbedo;

       // chocolateRiverMat.bumpTexture = chocolateRiverNormal;

        // Add material to wheels
        this.addComponent(snowMat);

        engine.addEntity(this);
    }
}