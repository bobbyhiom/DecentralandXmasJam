import { ScrollData } from "./ScrollData"

// a system to carry out the rotation
export class ScrollTexture implements ISystem {
    group = engine.getComponentGroup(ScrollData);

    update(dt: number) {
        for (let entity of this.group.entities) {
            let scroll = entity.getComponent(ScrollData)
            let planeShape = entity.getComponent(PlaneShape)



            scroll.currentAmount += dt * scroll.speed;
            let size = scroll.size

            if(scroll.currentAmount > 1){
                scroll.currentAmount -= 1;
            }
            

            planeShape.uvs = [
                (0+scroll.currentAmount)*size, 0*size,
                (1+scroll.currentAmount)*size, 0*size,
                (1+scroll.currentAmount)*size, 1*size,
                (0+scroll.currentAmount)*size, 1*size,
    
                (0+scroll.currentAmount)*size, 0*size,
                (1+scroll.currentAmount)*size, 0*size,
                (1+scroll.currentAmount)*size, 1*size,
                (0+scroll.currentAmount)*size, 1*size
            ]
        }
    }
}