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
      this.blockPool.getAliveObjects().forEach((block) => {
        if (block.selected) {
          block.context.globalAlpha = 0.6;
        } else {
          block.context.globalAlpha = 1;
        }
        block.render();
        block.context.globalAlpha = 1;
      });
    }
  }
  update() {
    if (this.blockPool) {
      this.blockPool.update();
    }
  }

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
        // console.log(this.assets);
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
    this.board = new Board(
      this,
      this.numberOfRows,
      this.numberOfRows,
      6,
      false
    );
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
        // console.log(block);
        block.onDown = () => {
          this.pickBlock(block);
        };
        track(block);
      }
    }
  }
  pickBlock(block) {
    if (this.isBoardBlocked) {
      return;
    }
    if (!this.selectedBlock) {
      block.selected = true;
      this.selectedBlock = block;
    } else {
      this.targetBlock = block;

      if (this.board.checkAdjacent(this.selectedBlock, this.targetBlock)) {
        this.isBoardBlocked = true;

        this.swapBlocks(this.selectedBlock, this.targetBlock);
      } else {
        this.clearSelection();
      }
    }
  }
  swapBlocks(block1, block2) {
    const tempX = block1.x;
    const tempY = block1.y;
    block1.x = block2.x;
    block1.y = block2.y;
    block2.x = tempX;
    block2.y = tempY;
    this.board.swap(block1, block2);
    if (!this.isReversingSwap) {
      const chains = this.board.findAllChains();

      if (chains.length > 0) {
        this.updateBoard();
      } else {
        this.isReversingSwap = true;
        this.swapBlocks(block1, block2);
      }
    } else {
      this.isReversingSwap = false;
      this.clearSelection();
    }
  }
  clearSelection() {
    this.isBoardBlocked = false;
    this.selectedBlock.selected = false;
    this.selectedBlock = null;
  }
  updateBoard() {
    this.board.clearChains();
    this.board.updateGrid();
    this.board.consoleLog();
    const chains = this.board.findAllChains();
    if (chains.length > 0) {
      this.updateBoard();
    } else {
      this.clearSelection();
    }
  }
  getBlockFromColRow(position) {
    let foundBlock;

    this.blockPool.getAliveObjects().some((block) => {
      if (block.row === position.row && block.col === position.col) {
        foundBlock = block;
        return true;
      }
      return false;
    });
    return foundBlock;
  }
  dropBlock(sourceRow, targetRow, col) {
    const block = this.getBlockFromColRow({ col, row: sourceRow });
    const targetY = 183 + targetRow * (this.blockSize + 4);
    block.row = targetRow;
    block.y = targetY;
  }
  dropReserveBlock(sourceRow, targetRow, col) {
    const x = 28 + col * (this.blockSize + 4);
    const y = 183 + targetRow * (this.blockSize + 4);
    const block = this.blockPool.get({
      x,
      y,
      col,
      row: targetRow,
      image: this.assets[this.board.grid[targetRow][col]],
      ttl: Infinity,
    });
    block.onDown = () => {
      this.pickBlock(block);
    };
    track(block);
  }
}
