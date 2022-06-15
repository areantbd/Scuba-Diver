class Jellyfish {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 900;
    this.y = 20;
    this.w = 80;
    this.h = 80;
    this.vx = -0.8;
    this.catched = false;
    this.points = 30;
    this.damage = 0.2;

    this.img = new Image();
    this.img.src = "/assets/media/Jellyfish.png";
    this.audio = new Audio();
    this.audio.src = "/assets/audio/punch.mp3";
    this.audio.volume = 0.03;
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
  }

  collision(player) {
    if (
      this.x + (this.w - 10) > player.x + 30 &&
      this.x + 5 < player.x + (player.w - 10) &&
      this.y + 10 < player.y + (player.h - 20) &&
      this.y + (this.h - 10) > player.y + 23
    ) {
      this.audio.play();
      return true;
    }
  }

  isVisible() {
    return this.x + this.w > 0;
  }
}
