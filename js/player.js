class Player {
    constructor(ctx) {
      this.ctx = ctx
      this.x = 20
      this.y = 250
      this.w = 150
      this.h = 80
      this.vx = 0
      this.vy = 0
      this.g = 0.05
      this.ay = 0
      this.ax = 0
  
      this.img = new Image()
      this.img.src = '/media/buzo sin fondo.png'
      this.img.frames = 10
      this.img.frame = 0
      
      
      
      this.tick = 0
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.img.frame * (this.img.width - 45) / this.img.frames,
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
      //TODO: add speed to position
      this.x += this.vx
      this.y += this.vy
      this.vy += this.g
      this.vy += this.ay
      this.vx += this.ax
      if (this.vx > 2) {
        this.vx = 2
      } else if (this.vx < -1) {
        this.vx = -1
      }
      
      
  
      this.tick++
  
      if (this.tick > 5 && (this.ay || this.ax)){
        this.tick = 0
        this.img.frame++
        
        if (this.img.frame > 9) {
        this.img.frame = 0
        }
      }    
    } 
  
    keyDown(key){
      if (key === UP) {
       this.ay = -0.1
     } 
      if (key === RIGHT) {
        this.ax = 0.1
      }
      if (key === LEFT){
        this.ax = -0.1
      }
    }
  
    keyUp(key){
      if (key === UP) {
        this.ay = 0
      }
      if (key === RIGHT) {
        this.ax = 0
      }
      if (key === LEFT){
        this.ax = 0
      }
    }
  }