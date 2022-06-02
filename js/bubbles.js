class Bubbles {
    constructor(ctx, x, y) {
      this.ctx = ctx
      //this.x = x      //*******************funcionan en game
      //this.y = y
      this.x = 123    //*******************Funcionan en player
      this.y = 175
      this.w = 60
      this.h = 100
  
      /* const audio = new Audio('/audio/bubbles.mp3') //Audio para burbujas
      audio.play() */
      
      //this.player = new Player(ctx) //********funciona en game
      
      this.img = new Image()
      this.img.src = '/media/bubbles.png'
      this.img.frames = 7
      this.img.frame = 0

      this.tick = 0
      
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.img.frame * (this.img.width) / this.img.frames,
        0,
        this.img.width /this.img.frames,
        this.img.height,
        this.x,                   //************funcionan en player
        this.y,
        //this.player.x + 105,    //***********funcionan en game
        //this.player.y - 75,
        this.w,
        this.h
      )
    }

    move() {
      this.tick++

      if (this.tick > 10) {
        this.tick = 0
        this.img.frame++

        if (this.img.frame > 6) {
          this.img.frame = 0
        }
      }
    }
  } 