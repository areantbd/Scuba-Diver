const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (game.interval) {
    game.stop();
    btn.innerText = "START";
  } else {
    game.start();
    btn.innerText = "STOP";
  }
});

const mute = document.getElementById("mute");

mute.addEventListener("click", function () {
  if (game.audio.currentTime > 0) {
    game.audio.pause();
    game.audio.currentTime = 0;
    mute.innerText = "PLAY";
  } else {
    game.audio.play();
    mute.innerText = "MUTE";
  }
});

const restart = document.getElementById("restart");

restart.addEventListener("click", function () {
    if (game.interval === null) {
      location.reload();
    }
  });
