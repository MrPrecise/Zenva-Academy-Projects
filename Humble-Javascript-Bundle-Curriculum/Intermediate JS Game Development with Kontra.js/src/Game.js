import Grid from "./Grid.js";
import Board from "./Board.js";
import Block from "./Block.js";

const { init, GameLoop, Sprite, initPointer, track, load, on, Pool } = kontra;
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
    if (this.blockPool) {
      this.blockPool.render();
    }
  }
  update() {}

  load() {
    console.log("Loading Assets");

    on("assetLoaded", (asset, url) => {
      asset.id = url;
    });

    load(
      "assets/images/bean_blue.png",
      "assets/images/bean_green.png",
      "assets/images/bean_orange.png",
      "assets/images/bean_pink.png",
      "assets/images/bean_purple.png",
      "assets/images/bean_red.png",
      "assets/images/bean_yellow.png",
      "assets/images/bean_white.png",
      "assets/images/bean_dead.png"
    )
      .then((assets) => {
        this.assets = assets;
        this.start();
        console.log(this.assets);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  start() {
    console.log("Starting Game");
    this.gameLoop.start();
    this.drawBoard();
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
    this.board = new Board(this.numberOfRows, this.numberOfRows, 6, true);
    this.blockPool = Pool({
      create: () => {
        return new Block();
      },
    });
  }

  drawBoard() {
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfCols; j++) {
        const x = 28 + j * (this.blockSize + 4);
        const y = 183 + i * (this.blockSize + 4);
        const block = this.blockPool.get({
          x,
          y,
          row: i,
          col: j,
          image: this.assets[this.board.grid[i][j]],
          ttl: Infinity,
        });
        console.log(block);
      }
    }
  }
}
