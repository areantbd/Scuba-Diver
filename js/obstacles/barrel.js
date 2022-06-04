class Barrel {
  constructor(ctx, player) {
    this.ctx = ctx;
    this.x = 1050;
    this.y = 20;
    this.w = 81;
    this.h = 100;
    this.vx = -0.6;

    this.player = player;

    this.img = new Image();
    this.img.src = "/media/Barrel.png";
    this.audio = new Audio()
    this.audio.src = '/audio/punch.mp3'
    this.audio.volume = 0.1
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;

    if (this.x + this.w <= 0) {
      this.x = 800;
    }
  }

  collision() {
    if (
      this.x + this.w > (this.player.x + 30) &&
      this.x < this.player.x + (this.player.w - 10) &&
      this.y < this.player.y + (this.player.h - 20) &&
      this.y + this.h > (this.player.y + 23)
    ) {
      this.audio.play()
      console.log('Barrel collision - 10live')
      return true;
    }
  }
}
