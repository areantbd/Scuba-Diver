class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.bg = new Background(ctx);
    this.player = new Player(ctx);
    this.bubbles = new Bubbles(ctx, this.player);
    this.player.bubbles = this.bubbles;
    //this.stingray = new Stingray(ctx);
    //this.fish = new Fish(ctx);
    this.jellyfish = new Jellyfish(ctx, this.player);
    this.shark = new Shark(ctx, this.player, this.shoot);
    this.coral = new Coral(ctx);
    this.seaweed = new Seaweed(ctx);
    this.barrel = new Barrel(ctx, this.player);
    this.mine = new Mine(ctx, this.player);
    this.interval = null;

    this.fishTick = 0;
    this.fishes = [];
    this.createFish();

    this.stingrayTick = 0;
    this.stingrays = [];
    this.createStingray();

    this.player.shoot.player = this.player;
    this.player.shoot.shark = this.shark;
    this.player.shoot.jellyfish = this.jellyfish;
    this.player.shoot.fishes = this.fishes;
    this.player.shoot.stingrays = this.stingrays;

    this.setListener();
    this.audio = new Audio(
      "/audio/Punk Rock Factory - Under The Sea (from The Little Mermaid).mp3"
    ); //Audio fondo juego
    this.audio.volume = 0.03;
    this.detectCollision();
  }

  start() {
    //this.audio.play();
    this.interval = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.saveAlbum();
    }, 1000 / 60);
  }

  saveAlbum() {
    if (this.player.shoot.saveAlbum) {
      const img = new Image(
        this.ctx.canvas.width * 0.32,
        this.ctx.canvas.height * 0.32
      );
      img.src = this.ctx.canvas.toDataURL();

      document.querySelector(".album").appendChild(img);
    }
    this.player.shoot.saveAlbum = false;
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

    this.stingrayTick++;
    if (this.stingrayTick > 1200) {
      this.stingrayTick = 0;
      this.createStingray();
    }
    this.stingrays.forEach((stingray) => {
      stingray.draw();
    });

    this.player.draw();
    if (this.player.ay > 0) {
      this.bubbles.draw();
    }

    this.jellyfish.draw();
    this.shark.draw();
    this.seaweed.draw();
    this.barrel.draw();
    this.mine.draw();
    this.renderLife();

    this.fishTick++;
    if (this.fishTick > 600) {
      this.fishTick = 0;
      this.createFish();
    }
    this.fishes.forEach((fish) => {
      fish.draw();
      //console.log(fish.catched)
    });
  }

  move() {
    this.detectCollision();
    this.bg.move();
    this.player.move();
    this.bubbles.move();

    this.stingrays.forEach((stingray) => {
      stingray.move();
    })

    this.jellyfish.move();
    this.shark.move();
    this.coral.move();
    this.seaweed.move();
    this.barrel.move();
    this.mine.move();

    this.fishes.forEach((fish) => {
      fish.move();
    });
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
      document.querySelector(".game").style.visibility = "hidden";
      document.getElementById("gameOver").style.visibility = "visible";
    }
    document.getElementById("life").innerText = `${parseInt(this.player.life)} bar`;
  }

  createFish() {
    const fish = new Fish(this.ctx);
    this.fishes.push(fish);
  }

  createStingray() {
    const stingray = new Stingray(this.ctx);
    this.stingrays.push(stingray)
  }
}
