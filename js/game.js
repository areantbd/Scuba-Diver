class Game {
    constructor(ctx) {
        this.ctx = ctx
    
        this.bg = new Background(ctx)
        this.player = new Player(ctx)
        //this.bubbles = new Bubbles(ctx)
        this.stingray = new Stingray(ctx)
        this.fish = new Fish(ctx)
        this.jellyfish = new Jellyfish(ctx)
        this.shark = new Shark(ctx)
        this.coral = new Coral(ctx)
        this.seaweed = new Seaweed(ctx)
        this.barrel = new Barrel(ctx, this.player)
        this.mine = new Mine(ctx)
        this.interval = null;

        
    
        this.setListener()
        this.audio = new Audio ('/audio/Punk Rock Factory - Under The Sea (from The Little Mermaid).mp3') //Audio fondo juego
        this.audio.volume = 0.05
        this.detectCollision()
      }
    
      start() {
        this.audio.play()
        this.interval = setInterval(() => {
          this.clear()
          this.draw()
          this.move()
        }, 1000 / 60)
      }
    
      stop() {
        this.audio.pause()
        clearInterval(this.interval) 
        this.interval = null
      }
    
      clear(){
        this.ctx.clearRect(
          0,
          0,
          this.ctx.canvas.width,
          this.ctx.canvas.height )    
      }
    
      draw() {
        this.bg.draw()
        this.coral.draw()
        this.player.draw()
        //this.bubbles.draw()
        this.jellyfish.draw()
        this.shark.draw()
        this.seaweed.draw()
        this.stingray.draw()
        this.barrel.draw()
        this.fish.draw()
        this.mine.draw()
      }
    
      move() {
        this.bg.move()
        this.player.move()
        //this.bubbles.move()
        this.stingray.move()
        this.fish.move()
        this.jellyfish.move()
        this.shark.move()
        this.coral.move()
        this.seaweed.move()
        this.barrel.move()
        this.mine.move()
        this.detectCollision()
      }
    
      setListener() {
        document.addEventListener('keydown', (e) => {
          this.player.keyDown(e.keyCode)
        })
    
        document.addEventListener('keyup', (e) => {
          this.player.keyUp(e.keyCode)
        })
      }

      detectCollision() {
        this.barrel.collision()
        // console.log('crash')
      }
      
    }