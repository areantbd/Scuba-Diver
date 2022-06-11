class Coral {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 300;
    this.y = 220;
    this.w = 155;
    this.h = 194;
    this.vx = -0.6;

    this.img = new Image();
    this.img.src = "/media/Coral.png";
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
}
