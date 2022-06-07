class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.bg = new Background(ctx);
    this.player = new Player(ctx);
    this.bubbles = new Bubbles(ctx, this.player);
    this.player.bubbles = this.bubbles;
    this.stingray = new Stingray(ctx);
    this.fish = new Fish(ctx);
    this.jellyfish = new Jellyfish(ctx, this.player);
    this.shark = new Shark(ctx, this.player, this.shoot);
    this.coral = new Coral(ctx);
    this.seaweed = new Seaweed(ctx);
    this.barrel = new Barrel(ctx, this.player);
    this.mine = new Mine(ctx, this.player);
    this.interval = null;

    this.player.shoot.player = this.player;
    this.player.shoot.shark = this.shark;
    this.player.shoot.jellyfish = this.jellyfish;
    this.player.shoot.fish = this.fish;
    this.player.shoot.stingray = this.stingray;

    this.setListener();
    this.audio = new Audio(
      "/audio/Punk Rock Factory - Under The Sea (from The Little Mermaid).mp3"
    ); //Audio fondo juego
    this.audio.volume = 0.03;
    this.detectCollision();
  }

  start() {
    this.audio.play();
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.saveAlbum()
    }, 1000 / 60);
  }

  saveAlbum() {
    if (this.player.shoot.saveAlbum) {
      const img = new Image(this.ctx.canvas.width * 0.32, this.ctx.canvas.height * 0.32)
      img.src = this.ctx.canvas.toDataURL()

      document.querySelector(".album").appendChild(img)
    }
    this.player.shoot.saveAlbum = false 
  }

  stop() {
    this.audio.pause();
    clearInterval(this.interval);
    this.interval = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.bg.draw();
    this.coral.draw();
    this.stingray.draw();
    this.player.draw();
    if (this.player.ay > 0) {
      this.bubbles.draw();
    }
    this.jellyfish.draw();
    this.shark.draw();
    this.seaweed.draw();
    this.barrel.draw();
    this.fish.draw();
    this.mine.draw();
    this.renderLife();
  }

  move() {
    this.bg.move();
    this.player.move();
    this.bubbles.move();
    this.stingray.move();
    this.fish.move();
    this.jellyfish.move();
    this.shark.move();
    this.coral.move();
    this.seaweed.move();
    this.barrel.move();
    this.mine.move();
    this.detectCollision();
  }

  setListener() {
    document.addEventListener("keydown", (e) => {
      this.player.keyDown(e.keyCode);
    });

    document.addEventListener("keyup", (e) => {
      this.player.keyUp(e.keyCode);
    });
  }

  detectCollision() {
    this.barrel.collision();
    this.mine.collision();
    this.shark.collision();
    this.jellyfish.collision();
    if (this.player.flash) {
      this.player.shoot.collision();
    }
  }

  renderLife() {
    if (this.mine.collision()) {
      this.player.life -= 1.5;
    } else if (this.barrel.collision()) {
      this.player.life -= 0.5;
    } else if (this.shark.collision()) {
      this.player.life -= 1;
    } else if (this.jellyfish.collision()) {
      this.player.life -= 0.2;
    }

    if (this.player.life < 0) {
      this.player.life = 0;
      this.stop();
      /* alert('Game Over')
      document.location.reload() */
      document.querySelector('.game').style.visibility = 'hidden';
      document.getElementById('gameOver').style.visibility = 'visible'
    }
    document.getElementById("life").innerText = `${parseInt(this.player.life)} bar`;
  }  
}
