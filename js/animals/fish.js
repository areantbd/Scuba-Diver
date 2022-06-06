class Fish {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 800
        this.y = 100
        this.w = 80
        this.h = 35
        this.vx = -1

        this.img = new Image()
        this.img.src = '/media/Tuna-short-left.png'
        this.img.frames = 8
        this.img.frame = 0

        this.tick = 0
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.img.frame * (this.img.width - 10) / this.img.frames,
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this.x += this.vx


        this.tick++
        if (this.tick > 5) {
            this.tick = 0
            this.img.frame++
            
            if (this.img.frame > 7) {
                this.img.frame = 0
            }
        }

        if (this.x + this.w <= 0) {
            this.x = Math.random() * 200 + 900
            this.y = Math.random() * 200 + 100
        }
    }
}