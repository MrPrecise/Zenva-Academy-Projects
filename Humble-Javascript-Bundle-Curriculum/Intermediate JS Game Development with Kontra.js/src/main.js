import { rezise } from "./resize.js";
import Game from "./Game.js";

const WIDTH = 360;
const HEIGHT = 640;

const game = new Game(WIDTH, HEIGHT);
console.log(game);

rezise(WIDTH, HEIGHT);
window.addEventListener(
  "resize",
  () => {
    rezise(WIDTH, HEIGHT);
  },
  false
);
