class Jellyfish {
  constructor(ctx, player) {
    this.ctx = ctx;
    this.x = 900;
    this.y = 20;
    this.w = 80;
    this.h = 80;
    this.vx = -0.8;

    this.player = player;

    this.img = new Image();
    this.img.src = "/media/Jellyfish.png";
    this.audio = new Audio();
    this.audio.src = "/audio/punch.mp3";
    this.audio.volume = 0.1;
    this.img.frames = 11;
    this.img.frame = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * this.img.width) / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  move() {
    this.x += this.vx;

    this.tick++;
    if (this.tick > 5) {
      this.tick = 0;
      this.img.frame++;

      if (this.img.frame > 10) {
        this.img.frame = 0;
      }
    }

    if (this.x + this.w <= 0) {
      this.x = Math.random() * 200 + 900;
      this.y = Math.random() * 100 + 20;
    }
  }

  collision() {
    if (
      this.x + (this.w - 10) > this.player.x + 30 &&
      this.x + 5 < this.player.x + (this.player.w - 10) &&
      this.y + 10 < this.player.y + (this.player.h - 20) &&
      this.y + (this.h - 10) > this.player.y + 23
    ) {
      this.audio.play();
      return true;
    }
  }
}
