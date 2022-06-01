class Barrel {
    constructor(ctx) {
        this.ctx = ctx          
        this.x = 1050 
        this.y = 20
        this.w = 81
        this.h = 100
        this.vx = -0.6

        this.img = new Image()
        this.img.src = '/media/Barrel.png'

    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this.x += this.vx

        if (this.x + this.w <= 0) {
            this.x = 800
        }
    }
}