export class AnimationTest
 extends Entity {
    isGrabbed: boolean = false
    
    constructor(transform: Transform) {
        super()
        this.addComponent(new GLTFShape("models/GingerBreadAnimated.gltf"))
        this.addComponent(transform)

        let animator = new Animator()
        this.addComponent(animator)

        const dieClip = new AnimationState("DieAction")
        const idleClip = new AnimationState("IdleAction")
       
        this.getComponent(Animator).addClip(dieClip)
        this.getComponent(Animator).addClip(idleClip)

        dieClip.play()

        engine.addEntity(this)
    }
}
