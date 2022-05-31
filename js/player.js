class Player {
    constructor(ctx) {
      this.ctx = ctx
      this.x = 20
      this.y = 250
      this.w = 150
      this.h = 80
      this.vx = 0
      this.vy = 0
      this.g = 0//.0002
      this.ay = 0
      this.ax = 0
  
      this.img = new Image()
      this.img.src = '/media/buzo sin fondo.png'
      this.img.frames = 10
      this.img.frame = 0
            
      this.tick = 0

      this.breathe = new Audio('/audio/breathe.mp3') //Audio para respiración
      this.bubbles = new Audio('/audio/bubbles.mp3')
      this.photo = new Audio('/audio/photo.mp3')

      //this.shoot = new Shoot(this.ctx, this.x + this.w, this.y + this.h)
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
      
      //this.shoot.draw()
    }
  
    move() {
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

      //this.shoot.move()
      
      
  
      this.tick++
  
      if (this.tick > 6 && (this.ay || this.ax)){
        this.tick = 0
        this.img.frame++
        
        if (this.img.frame > 9) {
        this.img.frame = 0
        }
      }
      
      if (this.y < 0) {
        this.y = 0
        this.vy = 0
      }

      if(this.y + this.h > this.ctx.canvas.height) {
        this.y = this.ctx.canvas.height - this.h;
        this.vy = 0
      }

      if (this.x + this.w > this.ctx.canvas.width) 
        {this.x = this.ctx.canvas.width - this.w;
        this.vx = 0
      }

      if (this.x < -25) {
        this.x = - 25
        thisvx = 0
      }


    } 
  
    keyDown(key){
      if (key === UP) {
       this.ay = -0.05
       this.breathe.play()
       this.bubbles.pause()
       this.bubbles.currentTime = 0
      } 
      if (key === DOWN) {
      this.ay = 0.05
      this.breathe.pause()
      this.breathe.currentTime = 0
      this.bubbles.play()
      } 
      if (key === RIGHT) {
        this.ax = 0.1
      }
      if (key === LEFT){
        this.ax = -0.1
      }
      if (key === PHOTO){
        this.photo.pause()
        this.photo.currentTime = 0
      }
    }
  
    keyUp(key){
      if (key === UP) {
        this.ay = 0
        //this.breathe.pause()
      }
      if (key === DOWN) {
        this.ay = 0
      } 
      if (key === RIGHT) {
        this.ax = 0
      }
      if (key === LEFT){
        this.ax = 0
      }
      if (key === PHOTO){
        this.photo.play()
        //this.shoot()
      }
    }

    /* shoot() {
      new Shoot(this.ctx, this.x + this.w, this.y + this.h)
    } */
  }