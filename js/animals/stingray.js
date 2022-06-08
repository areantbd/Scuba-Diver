class Stingray {
    constructor(ctx) {
        this.ctx = ctx          //por que no funcionan¿?
        this.x = Math.random() * 200 + 750;        //this.ctx.canvas.width
        this.y = 390        //this.ctx.canvas.height - this.h
        this.w = 100
        this.h = 60
        this.vx = -0.6
        this.catched = false

        this.img = new Image()
        this.img.src = '/media/Stingray.png'

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

        /* if (this.x + this.w <= 0) {
            this.x = Math.random() * 200 + 900
        } */
    }
}