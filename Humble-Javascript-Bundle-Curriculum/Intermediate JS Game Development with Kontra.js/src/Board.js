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
      let aString = "";
      for (let i = 0; i < this.rows; i++) {
        aString += "\n";
        for (let j = 0; j < this.cols; j++) {
          aString += " " + this.reserveGrid[i][j];
        }
      }

      aString += "\n";
      for (let j = 0; j < this.cols; j++) {
        aString += " -";
      }

      for (let i = 0; i < this.rows; i++) {
        aString += "\n";
        for (let j = 0; j < this.cols; j++) {
          aString += " " + this.grid[i][j];
        }
      }

      console.log(aString);
    }
  }

  swap(source, target) {
    const temp = this.grid[target.row][target.col];
    this.grid[target.row][target.col] = this.grid[source.row][source.col];
    this.grid[source.row][source.col] = temp;

    const tempPos = {
      row: source.row,
      cols: source.col,
    };

    source.row = target.row;
    source.col = target.col;
    target.row = tempPos.row;
    target.col = tempPos.col;
    this.consoleLog();
  }

  checkaAdjecent(source, target) {
    const diffRow = Math.abs(source.row - target.row);
    const diffCol = Math.abs(source.col - target.col);
    const isAdjecent = diffCol + diffRow === 1;
    return isAdjecent;
  }
}
