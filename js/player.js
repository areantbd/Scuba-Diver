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

      this.breathe = new Audio('/audio/breathe.mp3')  //Audio para respiración
      this.bubbles = new Bubbles(ctx)
      this.bubblesAudio = new Audio('/audio/bubbles.mp3')  //Audio para burbujas
      this.photo = new Audio('/audio/photo.mp3')      //Audio para foto

      /* this.shoot = new Shoot(
          this.ctx,
          this.x + this.w,
          this.y + this.h,
          this.w = 250,
          this.h = 100) */
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
      
      //this.bubbles.draw(this.x, this.y)
      // console.log('drawing: x' + this.x)
      
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
      } else if (this.vx < -1.5) {
        this.vx = -1.5
      }

      //this.shoot.move()
      
      
      //tick para regular la velocidad de frames del buzo
      this.tick++
  
      if (this.tick > 6 && (this.ay || this.ax)){
        this.tick = 0
        this.img.frame++
        
        if (this.img.frame > 9) {
        this.img.frame = 0
        }
      }
      
      //Límites de pantalla
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
        this.vx = 0
      }

      this.bubbles.move(this.x, this.y)
    } 
  
    keyDown(key){
      if (key === UP) {
       this.ay = -0.05
       this.breathe.play()
       this.bubblesAudio.pause()
       this.bubblesAudio.currentTime = 0
       //this.move(this.bubbles.move())
      } 
      if (key === DOWN) {
      this.ay = 0.05
      this.breathe.pause()
      this.breathe.currentTime = 0
      this.bubblesAudio.play()
      //this.draw(this.bubbles.draw())
      //this.move(this.bubbles.move())
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
        //this.shoot.draw()
      }
    }

    /* shoot() {
      new Shoot(this.ctx, this.x + this.w, this.y + this.h)
    } */
  }