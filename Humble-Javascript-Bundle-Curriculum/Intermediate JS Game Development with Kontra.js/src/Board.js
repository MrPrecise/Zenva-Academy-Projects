export default class Board {
  constructor(state, rows, cols, blockVar, debug = false) {
    this.state = state;
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

  checkAdjacent(source, target) {
    const diffRow = Math.abs(source.row - target.row);
    const diffCol = Math.abs(source.col - target.col);
    const isAdjecent = diffCol + diffRow === 1;
    return isAdjecent;
  }

  isChained(block) {
    let isChained = false;
    const variation = this.grid[block.row][block.col];
    const { row, col } = block;

    /**
     * Check left chain
     */
    if (
      variation === this.grid[row][col - 1] &&
      variation === this.grid[row][col - 2]
    ) {
      isChained = true;
    }

    /**
     * Check right chain
     */
    if (
      variation === this.grid[row][col + 1] &&
      variation === this.grid[row][col + 2]
    ) {
      isChained = true;
    }

    /**
     * Check up chain
     */
    if (this.grid[row - 2]) {
      if (
        variation === this.grid[row - 1][col] &&
        variation === this.grid[row - 2][col]
      ) {
        isChained = true;
      }
    }

    /**
     * Check down chain
     */
    if (this.grid[row + 2]) {
      if (
        variation === this.grid[row + 1][col] &&
        variation === this.grid[row + 2][col]
      ) {
        isChained = true;
      }
    }

    /**
     * Check center horizonal chain
     */
    if (
      variation === this.grid[row][col - 1] &&
      variation === this.grid[row][col + 1]
    ) {
      isChained = true;
    }

    /**
     * Checking center vertiacal chain
     */
    if (this.grid[row + 1] && this.grid[row - 1]) {
      if (
        variation === this.grid[row + 1][col] &&
        variation === this.grid[row - 1][col]
      ) {
        isChained = true;
      }
    }

    return isChained;
  }

  findAllChains() {
    const chained = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (
          this.isChained({
            row: i,
            col: j,
          })
        ) {
          chained.push({
            row: i,
            col: j,
          });
        }
      }
    }
    return chained;
  }

  clearChains() {
    const chainedBlocks = this.findAllChains();

    chainedBlocks.forEach((block) => {
      this.grid[block.row][block.col] = 0;
      this.state.getBlockFromColRow(block); //.kill();
    });
    this.consoleLog();
  }

  dropBlock(sourceRow, targetRow, col) {
    this.grid[targetRow][col] = this.grid[sourceRow][col];
    this.grid[sourceRow][col] = 0;
    // this.consoleLog();
    this.state.dropBlock(sourceRow, targetRow, col);
  }

  dropReserveBlock(sourceRow, targetRow, col) {
    this.grid[targetRow][col] = this.reserveGrid[sourceRow][col];
    this.reserveGrid[sourceRow][col] = 0;
    // this.consoleLog();
    this.state.dropReserveBlock(sourceRow, targetRow, col);
  }

  updateGrid() {
    for (let row = this.rows - 1; row >= 0; row--) {
      for (let col = 0; col < this.cols; col++) {
        if (this.grid[row][col] === 0) {
          let foundBlock = false;
          for (let rowAbove = row - 1; rowAbove >= 0; rowAbove--) {
            if (this.grid[rowAbove][col] > 0) {
              foundBlock = true;
              this.dropBlock(rowAbove, row, col);
              break;
            }
          }
          if (!foundBlock) {
            for (let rowAbove = this.rows - 1; rowAbove >= 0; rowAbove--) {
              if (this.reserveGrid[rowAbove][col] > 0) {
                this.dropReserveBlock(rowAbove, row, col);
                break;
              }
            }
          }
        }
      }
    }
    this.populateReserveGrid();
    this.consoleLog();
  }
}
