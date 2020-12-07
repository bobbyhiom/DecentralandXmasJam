import { SnowFlake } from "./../snowflake"

// a system to carry out the rotation
export class SnowGenerator implements ISystem {
    spawnTimer:number = 0.15;
    currentSpawnTimer: number = 0;
    flakeHeight: number = 20;
    xSizeOfAread: number = 25;
    ySizeOfAread: number = 40;
    xAreaOffset: number = 0;
    yAreaOffset: number = 0;

    update(dt: number) {
        this.currentSpawnTimer+=dt;

        if(this.currentSpawnTimer>this.spawnTimer){
            this.spawnSnokeFlake();
            this.spawnSnokeFlake();
            this.spawnSnokeFlake();
            this.spawnSnokeFlake();
            this.spawnSnokeFlake();
            this.currentSpawnTimer -= this.spawnTimer;
        }
    }
    public spawnSnokeFlake(): void {
        new SnowFlake(
            new Transform({
              position: new Vector3((Math.random()*this.xSizeOfAread) + this.xAreaOffset,this.flakeHeight,(Math.random()*this.ySizeOfAread) + this.yAreaOffset),
              scale: new Vector3(0.25,0.25,0.25)
            })
          );
    }
}