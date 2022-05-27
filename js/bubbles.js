class Bubbles {
    constructor(ctx, x, y) {
      this.ctx = ctx
      this.x = this.player.width
      this.y = this.player.height
      this.w = 150
      this.h = 80
  
  
      
      this.air = new Image()
      this.air.src = '/media/bubbles.png'
      this.air.frames = 7
      this.air.frame = 0
    }
  
    draw() {
      
    }
  } 