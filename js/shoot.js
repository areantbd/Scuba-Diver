class Shoot {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = 150;
    this.h = 80;

    this.player = null;

    this.img = new Image();
    this.img.src = "/media/flash-short.png";
    this.saveAlbum = false;
    this.score = 0;
  }

  draw() {
    this.x = this.player.x + 138;
    this.y = this.player.y + 34;
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  collidesWith(element) {
    return (
      element.catched === false &&
      this.x + this.w > element.x &&
      this.x < element.x + element.w &&
      this.y < element.y + element.h &&
      this.y + this.h > element.y
    ) 
  }
}
