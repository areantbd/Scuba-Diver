class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.bg = new Background(ctx);
    this.player = new Player(ctx);
    this.bubbles = new Bubbles(ctx, this.player);
    this.player.bubbles = this.bubbles;
    this.coral = new Coral(ctx);
    this.seaweed = new Seaweed(ctx);
    this.barrel = new Barrel(ctx, this.player);
    this.mine = new Mine(ctx, this.player);
    this.interval = null;

    this.fishes = [];
    this.fishTick = 0;
    this.stingrayTick = 0;
    this.sharkTick = 0;
    this.jellyFishTick = 0;
    
    this.player.shoot.player = this.player;

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
      this.populateFish();
      this.fishTick++;
      this.stingrayTick++;
      this.sharkTick++;
      this.jellyFishTick++;
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

  populateFish() {
  /* const x = Math.random() * this.canvas.width
     const y = Math.random() * this.canvas.height */
    if (this.fishTick > 200) {
      this.fishTick = 0;
      this.fishes.push(new Fish(
        this.ctx, 
        Math.random() * 100 + 750, 
        Math.random() * 250 + 100
      ))
    }

    /* if (this.fishTick % 200 === 0) {
      //this.fishTick = 0;
      this.fishes.push(new Fish(
        this.ctx, 
        Math.random() * 100 + 750, 
        Math.random() * 250 + 100
      ))
        console.log(this.fishes)
    } */
    
    if (this.stingrayTick % 600 === 0) {
      this.fishes.push(new Stingray(
        this.ctx,
        Math.random() * 200 + 750,
        390
      ))
    }

    if (this.sharkTick > 400) {
      console.log(this.sharkTick)
      console.log(this.fishes)
      this.sharkTick = 0
      this.fishes.push(new Shark(
        this.ctx,
        this.player,
        Math.random() * 200 + 750,
        /* Math.random() * 250 + 400 */700
      ))
    }

    /* if (this.sharkTick % 900 === 0) {
      console.log(this.sharkTick)
      console.log(this.fishes)
      this.fishes.push(new Shark(
        this.ctx,
        this.player,
        Math.random() * 200 + 750,
        /* Math.random() * 250 + 400 700
      ))
    }*/

    if (this.jellyFishTick % 800 === 0) {
      this.fishes.push(new Jellyfish(
        this.ctx,
        this.player,
        Math.random() * 200 + 900,
        Math.random() * 100 + 20
      ))
    }

  }

  stop() {
    this.audio.pause();
    clearInterval(this.interval);
    this.interval = null;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.cleanArrays()
  }

  draw() {
    this.bg.draw();
    this.coral.draw();
    if (this.player.ay > 0) {
      this.bubbles.draw();
    }
    this.fishes.forEach((fish) => fish.draw())
    this.player.draw();
    this.seaweed.draw();
    this.barrel.draw();
    this.mine.draw();
    this.renderLife();
    document.getElementById("score").innerText = `Score: ${parseInt(this.player.score)}`
  }

  move() {
    this.detectCollision();
    this.bg.move();
    this.player.move();
    this.bubbles.move();
    this.coral.move();
    this.seaweed.move();
    this.barrel.move();
    this.mine.move();
    this.fishes.forEach((fish) => fish.move())
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
    this.fishes.forEach((fish) => {
      /* if (typeof fish === 'shark') {
        this.player.life -= 1
      } */

      if (this.player.shoot.collidesWith(fish)) {
        this.player.shoot.saveAlbum = true;
        this.player.score += fish.points;
        fish.catched = true
      }
      if (fish.collision(this.player)){
        this.player.life -= fish.damage
      }
    })
  }

  renderLife() {
    if (this.mine.collision()) {
      this.player.life -= 1.5;
    } else if (this.barrel.collision()) {
      this.player.life -= 0.5;
    }

    if (this.player.life < 0) {
      this.player.life = 0;
      this.stop();
      document.getElementById("game").style.visibility = "hidden";
      document.getElementById("gameOver").style.visibility = "visible";
      document.querySelector(".album").style.visibility = "visible";
    }
    document.getElementById("life").innerText = `${parseInt(this.player.life)} bar`;
  }

  cleanArrays() {    
    this.fishes = this.fishes.filter((fish) => fish.isVisible())
  }
}
