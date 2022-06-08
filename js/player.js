class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 20;
    this.y = 250;
    this.w = 150;
    this.h = 80;
    this.vx = 0;
    this.vy = 0;
    this.g = 0.0002;
    this.ay = 0;
    this.ax = 0;

    this.life = 250;
    this.score = 0;
    

    this.img = new Image();
    this.img.src = "/media/buzo sin fondo.png";
    this.img.frames = 10;
    this.img.frame = 0;
    this.tick = 0;

    this.breathe = new Audio("/audio/breathe.mp3"); //Audio para respiración
    this.bubblesAudio = new Audio("/audio/bubbles.mp3"); //Audio para burbujas
    this.photo = new Audio("/audio/photo.mp3"); //Audio para foto
    this.shoot = new Shoot(this.ctx);
    this.flash = false;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frame * (this.img.width - 45)) / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
    if (this.flash) {
      this.shoot.draw();
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.g;
    this.vy += this.ay;
    this.vx += this.ax;
    if (this.vx > 2) {
      this.vx = 2;
    } else if (this.vx < -1.5) {
      this.vx = -1.5;
    }

    if (this.flash) {
      this.shoot.move();
    }
    this.flash = false;

    //tick para regular la velocidad de frames del buzo
    this.tick++;

    if (this.tick > 6 && (this.ay || this.ax)) {
      this.tick = 0;
      this.img.frame++;

      if (this.img.frame > 9) {
        this.img.frame = 0;
      }
    }
    //Límites de pantalla
    if (this.y < 0) {
      this.y = 0;
      this.vy = 0;
    }

    if (this.y + this.h > this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.h;
      this.vy = 0;
    }

    if (this.x + this.w > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }

    if (this.x < -25) {
      this.x = -25;
      this.vx = 0;
    }

    this.bubbles.move();
  }

  keyDown(key) {
    if (key === UP) {
      this.ay = -0.05;
      this.breathe.play();
      this.bubblesAudio.pause();
      this.bubblesAudio.currentTime = 0;
    }
    if (key === DOWN) {
      this.ay = 0.05;
      this.breathe.pause();
      this.breathe.currentTime = 0;
      this.bubblesAudio.play();
    }
    if (key === RIGHT) {
      this.ax = 0.1;
    }
    if (key === LEFT) {
      this.ax = -0.1;
    }
    if (key === PHOTO) {
      this.photo.pause();
      this.photo.currentTime = 0;
    }
  }

  keyUp(key) {
    if (key === UP) {
      this.ay = 0;
    }
    if (key === DOWN) {
      this.ay = 0;
    }
    if (key === RIGHT) {
      this.ax = 0;
    }
    if (key === LEFT) {
      this.ax = 0;
    }
    if (key === PHOTO) {
      this.photo.play();
      this.flash = true;
    }
  }
}
