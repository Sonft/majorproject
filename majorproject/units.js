// let right, left, up, down, diagonal
// unit[x-1][y], unit[x+1][y],


class Infantry {
  constructor(x, y, h, o, movesLeft, movesRight, movesDown, movesUp, movesDiagonal) {
    this.x = x;
    this.y = y;
    this.health = h;
    this.ownedBy = o;
    this.l = movesLeft;
    this.r = movesRight;
    this.u = movesUp;
    this.d = movesDown;
    this.di = movesDiagonal;
    
  }
  display(x, y, o) {
    for (let x = this.x; x < columns; x++) {
      for (let y = this.y; y < rows; y++) {
        if (this.ownedBy === "France") {
          unitsOfFrance.push();
        }
      }
    }

  }
}
