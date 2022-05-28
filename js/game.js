class Game {
    constructor(ctx) {
        this.ctx = ctx
    
        this.bg = new Background(ctx)
        this.player = new Player(ctx)
        this.interval = null;
    
        this.setListener()
        this.audio = new Audio ('/audio/Punk Rock Factory - Under The Sea (from The Little Mermaid).mp3') //Audio fondo juego
        this.audio.volume = 0.02
      }
    
      start() {
        //TODO: start the loop
        this.audio.play()
        this.interval = setInterval(() => {
          this.clear() 
          this.draw()
          this.move()
        }, 1000 / 60)
      }
    
      stop() {
        this.audio.pause()
        //TODO: stop the loop
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
        this.player.draw()
        //this.bubbles.draw()
      }
    
      move() {
        this.bg.move()
        this.player.move()
        //this.bubbles.move()
      }
    
      setListener() {
        document.addEventListener('keydown', (e) => {
          this.player.keyDown(e.keyCode)
        })
    
        document.addEventListener('keyup', (e) => {
          this.player.keyUp(e.keyCode)
        })
      }
      
    }