class Seaweed {
    constructor(ctx) {
        this.ctx = ctx          
        this.x = 800 
        this.y = 240 
        this.w = 155
        this.h = 194
        this.vx = -0.6

        this.img = new Image()
        this.img.src = '/media/Seaweed.png'

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