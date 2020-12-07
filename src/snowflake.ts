import { SnowData } from "./SnowSystem/SnowData"

export class SnowFlake extends Entity { 
    private static planeShape: PlaneShape = null
    private static material: BasicMaterial = null
    private static texture: Texture = null;

    constructor(transform: Transform) {
        super()
        this.addComponent( new Transform({ 
            position: transform.position,
            scale: transform.scale
        }));   
        
        if(SnowFlake.material === null){
            // Create texture
            SnowFlake.texture = new Texture("materials/SmallSnowBallAbledo.png",{wrap:1});

            // Create material
            SnowFlake.material = new BasicMaterial();
            SnowFlake.material.castShadows = false;
           // SnowFlake.material.metallic = 0.1;
           // SnowFlake.material.roughness = 0.9;
            SnowFlake.material.texture = SnowFlake.texture;
            //SnowFlake.material.alphaTexture = snowTextureAlbedo;
        }

        if(SnowFlake.planeShape === null){
            SnowFlake.planeShape = new PlaneShape();
            SnowFlake.planeShape.withCollisions = false;
        }

        this.addComponent(new Billboard(true,true,true));

        this.addComponent(new SnowData());
        
        this.addComponent(SnowFlake.material);
        this.addComponent(SnowFlake.planeShape);
        
        engine.addEntity(this);
    }
}