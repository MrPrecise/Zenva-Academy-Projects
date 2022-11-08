import Grid from "./Grid.js";
import Board from "./Board.js";
const { init, GameLoop, Sprite, initPointer, track } = kontra;

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.numberOfCols = 8;
    this.numberOfRows = 8;
    this.blockSize = 35;
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

    this.createGrid();
    this.createBoard();
    this.load();
  }
  render() {
    this.grid.render();
  }
  update() {}
  load() {
    console.log("Loading Assets");
    this.start();
  }
  start() {
    console.log("Starting Game");
    this.gameLoop.start();
  }

  createGrid() {
    this.grid = new Grid({
      numberOfRows: this.numberOfRows,
      numberOfCols: this.numberOfCols,
      cellSize: this.blockSize + 4,
      x: 25,
      y: 180,
      color: "lavender",
    });
  }

  createBoard() {
    this.board = new Board(this.numberOfRows, this.numberOfCols, 6, true);
  }
}
