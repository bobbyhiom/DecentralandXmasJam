import { NPC } from '../node_modules/@dcl/npc-utils/index'
import { Dialog } from '../node_modules/@dcl/npc-utils/utils/types'

export class CoffeeTalk extends NPC {
    constructor(transform: Transform) {
        super(transform,
            "models/CoffeeTalk.gltf",
            () => {
                this.talk(MyDialog, 0)
                this.playAnimation("CoffeeChat", false, 2)
             },
             {
              faceUser: false,
              reactDistance: 1,
              portrait: {
                path: 'images/portraits/GingerBreadMan.png',
                height: 220,
                width: 220,
                offsetX: 80,
                section: {
                  sourceHeight: 512,
                  sourceWidth: 512,
                },
              },
              onWalkAway: () => {
                //alice.playAnimation('Goodbye', true, 2)
              },
       
            }
        )

        this.getComponent(GLTFShape).isPointerBlocker = false;

        this.playAnimation("CoffeeChat", false, 2)
    }
}

export let MyDialog: Dialog[] = [
    {
      text: 'Hello stranger. Welcome to my home',
    },
    {
        text: 'If you haven\'t already, you should speak to the Snowman outside',
        isEndOfDialog: true,
      }
]


/*
export class CoffeeTalk
 extends Entity {
    constructor(transform: Transform) {
        super()
        engine.addEntity(this)

        var shape = new GLTFShape("models/CoffeeTalk.gltf")
        shape.isPointerBlocker = false
        this.addComponent(shape)

        this.addComponent(transform)

       
    }
}
*/