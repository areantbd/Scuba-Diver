class Jellyfish {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 900
        this.y = 20
        this.w = 80
        this.h = 80
        this.vx = -0.5

        this.img = new Image()
        this.img.src = '/media/Jellyfish.png'
        this.img.frames = 11
        this.img.frame = 0

        this.tick = 0
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.img.frame * this.img.width /this.img.frames,
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
        )
        
        console.log('drawing jellyfish')
    }

    move() {
        this.x += this.vx

        this.tick++
        if (this.tick > 5) {
            this.tick = 0
            this.img.frame++

            if (this.img.frame > 10) {
                this.img.frame = 0
            }
        }

        if (this.x + this.width <= 0) {
            this.x = 800
        }
    }
}