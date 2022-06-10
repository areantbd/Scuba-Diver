class Fish {
  constructor(ctx, player) {
    this.ctx = ctx;
    this.x = Math.random() * 100 + 750;
    this.y = Math.random() * 250 + 100;
    this.w = 80;
    this.h = 35;
    this.vx = -1;
    this.catched = false
    this.points = 10

    this.player = player;

    this.img = new Image();
    this.img.src = "/media/Tuna-short-left.png";
    this.img.frames = 8;
    this.img.frame = 0;

    this.tick = 0;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * (this.img.width - 10)) / this.img.frames,
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

      if (this.img.frame > 7) {
        this.img.frame = 0;
      }
    }
  }

  isVisible() {
    return this.x + this.w > 0
  }

  collision() {
    if (
      this.x + this.w > this.player.x + 30 &&
      this.x + 5 < this.player.x + (this.player.w - 10) &&
      this.y + 30 < this.player.y + (this.player.h - 20) &&
      this.y + (this.h - 15) > this.player.y + 23
    ) {
      this.audio.play();
      return true;
    }
  }
}
