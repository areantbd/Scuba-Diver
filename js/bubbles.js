class Bubbles {
    constructor(ctx, x, y) {
      this.ctx = ctx
      this.x = x
      this.y = y
      this.w = 150
      this.h = 80
  
      const audio = new Audio('/audio/bubbles.mp3') //Audio para burbujas
      audio.play()
      
      
    }
  
    draw() {
      this.air = new Image()
      this.air.src = '/media/bubbles.png'
      this.air.frames = 7
      this.air.frame = 0
    }

    move() {

    }
  } 