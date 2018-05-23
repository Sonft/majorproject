// let right, left, up, down, diagonal
// unit[x-1][y], unit[x+1][y],


class Infantry {
  constructor(x, y, h, o, movesLeft, movesRight, movesDown, movesUp, movesDiagonal) {
    this.x = x;
    this.y = y;
    this.x1 = x+1;
    this.y1 = y+1;
    this.health = h;
    this.ownedBy = o;
    this.l = movesLeft;
    this.r = movesRight;
    this.u = movesUp;
    this.d = movesDown;
    this.di = movesDiagonal;

  }
  display(x, y, movesLeft, movesRight, movesDown, movesUp, movesDiagonal, o) {
    for (let x = this.x; x <= this.x1; x++) {
      for (let y = this.y; y <= this.y1; y++) {
        if (this.ownedBy === "Great Britain") {
          unitMap[x][y] = 2;
        }
        else if (this.ownedBy === "Spain") {
          unitMap[x][y] = 3;
        }
        else if (this.ownedBy === "France") {
          unitMap[x][y] = 4;
        }
        else if (this.ownedBy === "Portugal") {
          unitMap[x][y] = 5;
        }
      }
    }

  }
}
