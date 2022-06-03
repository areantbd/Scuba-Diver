class Shark {
  constructor(ctx, player) {
    this.ctx = ctx;
    this.x = 800;
    this.y = 250;
    this.w = 150;
    this.h = 80;
    this.vx = -1.2;

    this.player = player;

    this.img = new Image();
    this.img.src = "/media/Shark.png";
    this.audio = new Audio();
    this.audio.src = "/audio/punch.mp3";
    this.audio.volume = 0.1;
    this.img.frames = 10;
    this.img.frame = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * (this.img.width + 2)) / this.img.frames,
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
    if (this.tick > 10) {
      this.tick = 0;
      this.img.frame++;

      if (this.img.frame > 9) {
        this.img.frame = 0;
      }
    }
    if (this.x + this.w <= 0) {
      this.x = 1400;
    }
  }

  collision() {
    if (
      this.x + this.w > (this.player.x + 30) &&
      (this.x + 5) < this.player.x + (this.player.w - 10) &&
      (this.y + 30) < this.player.y + (this.player.h - 20) &&
      this.y + (this.h - 15) > (this.player.y + 23)
    ) {
      this.audio.play();
      return true;
    }
  }
}
