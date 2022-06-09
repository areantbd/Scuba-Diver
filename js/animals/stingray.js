class Stingray {
    constructor(ctx, player) {
        this.ctx = ctx          //por que no funcionan¿?
        this.x = Math.random() * 200 + 750;        //this.ctx.canvas.width
        this.y = 390        //this.ctx.canvas.height - this.h
        this.w = 100
        this.h = 60
        this.vx = -0.6
        this.catched = false
        this.points = 15

        this.player = player;
        //this.shoot = shoot;

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
    
    isVisible() {
        return this.x + this.w > 0
      }

      collision() {
        if (
          this.x + this.w > this.player.x + 30 &&
          this.x + 5 < this.player.x + (this.player.w - 10) &&
          this.y + 30 < this.player.y + (this.player.h - 20) &&
          this.y + (this.h - 15) > this.player.y + 23
        ) {
          this.audio.play();
          return true;
        }
      }
}