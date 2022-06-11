class Mine {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 550;
    this.y = 150;
    this.w = 120;
    this.h = 114;
    this.vx = -0.6;
    this.damage = 1.5;

    this.img = new Image();
    this.img.src = "/media/Mine.png";
    this.audio = new Audio();
    this.audio.src = "/audio/punch.mp3";
    this.audio.volume = 0.03;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;

    if (this.x + this.w <= 0) {
      this.x = Math.random() * 300 + 750;
      this.y = Math.random() * 150 + 100;
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
