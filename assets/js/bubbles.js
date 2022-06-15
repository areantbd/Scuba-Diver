class Bubbles {
  constructor(ctx, player) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.w = 60;
    this.h = 100;

    this.player = player;

    this.img = new Image();
    this.img.src = "assets/media/bubbles.png";
    this.img.frames = 7;
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
      this.player.x + 105,
      this.player.y - 77,
      this.w,
      this.h
    );
  }

  move() {
    this.tick++;

    if (this.tick > 15) {
      this.tick = 0;
      this.img.frame++;

      if (this.img.frame > 6) {
        this.img.frame = 0;
      }
    }
  }
}
