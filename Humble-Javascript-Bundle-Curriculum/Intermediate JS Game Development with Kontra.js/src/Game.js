const { init, GameLoop, Sprite, initPointer, track } = kontra;

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.init();
  }

  init() {
    console.log("Init Game");
    const { canvas, context } = init();
    this.canvas = canvas;
    this.context = context;
    initPointer();
    this.gameLoop = GameLoop({
      update: this.update.bind(this),
      render: this.render.bind(this),
    });

    this.load();
  }
  render() {}
  update() {}
  load() {
    console.log("Loading Assets");
    this.start();
  }
  start() {
    console.log("Starting Game");
    this.gameLoop.start();
  }
}
