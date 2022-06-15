class Shark {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = Math.random() * 100 + 750;
    this.y = Math.random() * 300 + 80;
    this.w = 150;
    this.h = 80;
    this.vx = -1.2;
    this.catched = false;
    this.points = 50;
    this.damage = 1;

    this.img = new Image();
    this.img.src = "./assets/media/Shark.png";
    this.audio = new Audio();
    this.audio.src = "./assets/audio/punch.mp3";
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
  }

  isVisible() {
    return this.x + this.w > 0;
  }

  collision(player) {
    if (
      this.x + this.w > player.x + 30 &&
      this.x + 5 < player.x + (player.w - 10) &&
      this.y + 30 < player.y + (player.h - 20) &&
      this.y + (this.h - 15) > player.y + 23
    ) {
      this.audio.play();
      return true;
    }
  }
}
