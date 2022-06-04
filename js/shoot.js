class Shoot {
  constructor(ctx, player, stingray, shark, fish, jellyfish) {
    this.ctx = ctx;
    this.w = 150;
    this.h = 80;

    this.stingray = stingray;
    this.fish = fish;
    this.jellyfish = jellyfish;
    this.shark = shark;
    this.player = player;

    this.img = new Image();
    this.img.src = "/media/flash-short.png";
  }

  draw() {
      this.x = this.player.x + 138
      this.y = this.player.y + 34
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.collision()
  }

  move() {}

  collision() {
    if (
      this.x + this.w > this.shark.x &&
      this.x < this.shark.x + this.shark.w &&
      this.y< this.shark.y + this.shark.h &&
      this.y + this.h > this.shark.y
    ) {
      console.log("Shark foto! + 50pts");
      //return true;
    }

    if (
        this.x + this.w > this.fish.x &&
        this.x < this.fish.x + this.fish.w &&
        this.y< this.fish.y + this.fish.h &&
        this.y + this.h > this.fish.y
      ) {
        console.log("Fish foto! + 10pts");
        //return true;
      }

      if (
        this.x + this.w > this.jellyfish.x &&
        this.x < this.jellyfish.x + this.jellyfish.w &&
        this.y< this.jellyfish.y + this.jellyfish.h &&
        this.y + this.h > this.jellyfish.y
      ) {
        console.log("Jellyfish foto! + 30pts");
        //return true;
      }

      if (
        this.x + this.w > this.stingray.x &&
        this.x < this.stingray.x + this.stingray.w &&
        this.y< this.stingray.y + this.stingray.h &&
        this.y + this.h > this.stingray.y
      ) {
        console.log("Stingray foto! + 15pts");
        //return true;
      }
  }
}
