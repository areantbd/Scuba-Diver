class Shoot {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = 150;
    this.h = 80;

    this.stingrays = [];
    this.fishes = [];
    this.jellyfish = [];
    this.shark = [];
    this.player = null;

    this.img = new Image();
    this.img.src = "/media/flash-short.png";
    this.saveAlbum = false;
    this.score = 0;
  }
  
  draw() {
    this.x = this.player.x + 138;
    this.y = this.player.y + 34;
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {}

  collidesWith(element) {
    if (
      element.catched === false &&
      this.x + this.w > element.x &&
      this.x < element.x + element.w &&
      this.y < element.y + element.h &&
      this.y + this.h > element.y
    ) { return true
      }
  }

    /* collision() {
    if (
      this.x + this.w > this.shark.x &&
      this.x < this.shark.x + this.shark.w &&
      this.y < this.shark.y + this.shark.h &&
      this.y + this.h > this.shark.y
    ) {
      this.saveAlbum = true;
      this.player.score += 50;
    }

    this.fishes.forEach(fish => {
      if (
        fish.catched === false &&
        this.x + this.w > fish.x &&
        this.x < fish.x + fish.w &&
        this.y < fish.y + fish.h &&
        this.y + this.h > fish.y
      ) {
        this.saveAlbum = true;
        this.player.score += 10;
        fish.catched = true
      }
    })
    

    if (
      this.x + this.w > this.jellyfish.x &&
      this.x < this.jellyfish.x + this.jellyfish.w &&
      this.y < this.jellyfish.y + this.jellyfish.h &&
      this.y + this.h > this.jellyfish.y
    ) {
      this.saveAlbum = true;
      this.player.score += 30;
    }

    this.stingrays.forEach(stingray => {
      if (
        stingray.catched === false &&
        this.x + this.w > stingray.x &&
        this.x < stingray.x + stingray.w &&
        this.y < stingray.y + stingray.h &&
        this.y + this.h > stingray.y
      ) {
        this.saveAlbum = true;
        this.player.score += 15;
        stingray.catched = true
      }
    })
    

    document.getElementById("score").innerText = `Score: ${parseInt(this.player.score)}`
  } */
}
