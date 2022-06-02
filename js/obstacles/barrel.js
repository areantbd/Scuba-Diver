class Barrel {
  constructor(ctx, player) {
    this.ctx = ctx;
    // this.x = 1050;
    this.x = 500;
    this.y = 20;
    this.w = 81;
    this.h = 100;
    this.vx = -0.6;

    this.player = player;

    this.img = new Image();
    this.img.src = "/media/Barrel.png";
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
      this.x + this.w > this.player.x &&
      this.x < this.player.x + this.player.w &&
      this.y < this.player.y + this.player.h &&
      this.y + this.h > this.player.y
    ) {
      console.log("crash");
      return true;
    }

    // console.log("entra");
    // if (
    //   (this.x < (this.player.x + this.player.w) &&
    //     (this.y + this.h) > this.player.y) ||
    //   (this.y < (this.player.y + this.player.h) &&
    //     this.x < (this.player.x + this.player.w)) ||
    //   ((this.x + this.w) > this.player.x &&
    //     this.y < (this.player.y + this.player.h)) ||
    //   ((this.y + this.h) > this.player.y && (this.x + this.w) > this.player.x)
    // ) {
    //   console.log("crash");
    //   return true;
    // }
  }
}
