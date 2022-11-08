export default class Board {
  constructor(rows, cols, blockVar, debug = false) {
    this.rows = rows;
    this.cols = cols;
    this.blockVar = blockVar;
    this.debug = debug;
    this.grid = [];
    this.reserveGrid = [];

    for (let i = 0; i < rows; i++) {
      this.grid.push([]);
      this.reserveGrid.push([]);
    }

    this.populateGrid();
    this.populateReserveGrid();
    this.consoleLog();
  }

  populateGrid() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const variation = Math.floor(Math.random() * this.blockVar) + 1;
        this.grid[i].push(variation);
      }
    }
  }

  populateReserveGrid() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const variation = Math.floor(Math.random() * this.blockVar) + 1;
        this.reserveGrid[i].push(variation);
      }
    }
  }

  consoleLog() {
    if (this.debug) {
      console.log(this.grid);
      console.log(this.reserveGrid);
    }
  }
}
