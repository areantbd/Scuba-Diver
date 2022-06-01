class Mine {
    constructor(ctx) {
        this.ctx = ctx          
        this.x = 550 
        this.y = 150
        this.w = 120
        this.h = 114
        this.vx = -0.6

        this.img = new Image()
        this.img.src = '/media/Mine.png'

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