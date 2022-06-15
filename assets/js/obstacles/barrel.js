class Barrel {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1050;
    this.y = 20;
    this.w = 81;
    this.h = 100;
    this.vx = -0.6;
    this.damage = 0.5;

    this.img = new Image();
    this.img.src = "./assets/media/Barrel.png";
    this.audio = new Audio();
    this.audio.src = "./assets/audio/punch.mp3";
    this.audio.volume = 0.1;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;

    if (this.x + this.w <= 0) {
      this.x = Math.random() * 200 + 750;
      this.y = Math.random() * 150 + 20;
    }
  }

  collision(player) {
    if (
      this.x + this.w > player.x + 30 &&
      this.x < player.x + (player.w - 10) &&
      this.y < player.y + (player.h - 20) &&
      this.y + this.h > player.y + 23
    ) {
      this.audio.play();
      return true;
    }
  }
}
