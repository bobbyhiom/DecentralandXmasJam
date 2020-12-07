import { SnowData } from "./SnowData"

// a system to carry out the rotation
export class SnowDrop implements ISystem {
    group = engine.getComponentGroup(SnowData);

    update(dt: number) {
        for (let entity of this.group.entities) {
            let snowData = entity.getComponent(SnowData)

            let transform = entity.getComponent(Transform)
            
            let distance = Vector3.Down().scale(dt * 3)
            transform.translate(distance)

            snowData.age -= dt;

            if(snowData.age<=0)
            {
                // Time to die
                engine.removeEntity(entity);
            }
        }
    }
}