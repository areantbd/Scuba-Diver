class Shoot {
    constructor(ctx, x, y, w, h){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.img = new Image()
        this.img.src = '/media/Flashlight.png'
        this.img.frames = 1
    }

    draw() {
        this.ctx.drawImage(
        this.x,
        this.y,
        this.w,
        this.h
    )}
}