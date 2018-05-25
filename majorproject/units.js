
function displayUnits(){
  for (let x = 0; x < unitsOfGreatBritain.length; x++) {
    unitsOfGreatBritain[x].display();
  }
  for (let y = 0; y < unitsOfFrance.length; y++) {
    unitsOfFrance[y].display();
  }
  for (let l = 0; l < unitsOfSpain.length; l++) {
    unitsOfSpain[l].display();
  }
  for (let g = 0; g < unitsOfPortugal.length; g++) {
    unitsOfPortugal[g].display();
  }
}









// let right, left, up, down, diagonal
// unit[x-1][y], unit[x+1][y],






class Infantry {
  constructor(x, y, h, o, movesLeft, movesRight, movesDown, movesUp, moveLimit, strength) {
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
    this.m = moveLimit;
    this.s = strength;

  }
  display(x, y, movesLeft, movesRight, movesDown, movesUp, o) {
    for (let x = this.x; x <= this.x; x++) {
      for (let y = this.y; y <= this.y; y++) {
        if (this.ownedBy === "Great Britain") {
          unitMap[x][y] = 2;
          if (showUnitMap === true) {
            tint(255, 255);
            image(britainUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else {
            tint(255, 67);
            image(britainUnit, x *blockWidth, y * blockHeight, blockWidth, blockHeight);
          }
        }
        else if (this.ownedBy === "Spain") {
          unitMap[x][y] = 3;
          if (showUnitMap === true) {
            tint(255, 255);
            image(spainUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else {
            tint(255, 67);
            image(spainUnit, x *blockWidth, y*blockHeight, blockWidth, blockHeight);
          }
        }
        else if (this.ownedBy === "France") {
          unitMap[x][y] = 4;
          if (showUnitMap === true) {
            tint(255, 255);
            image(franceUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else {
            tint(255, 67);
            image(franceUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
        }
        else if (this.ownedBy === "Portugal") {
          unitMap[x][y] = 5;
          if (showUnitMap === true) {
            tint(255, 255);
            image(portugalUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else {
            tint(255, 67);
            image(portugalUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
        }
      }
    }
  }
  moveThisUnit(moveLimit) {
    for(let x = 0; x< moveLimit; x++){
      //right arrowkey
      if (keyIsPressed && (keyCode === 39)){
        this.x += 1;
      }
      //left arrowkey
      if (keyIsPressed && (keyCode === 39)){
        this.x += -1;
      }
      //upArrowKey
      if (keyIsPressed && (keyCode === 38)){
        this.y += -1;
      }
      //down arrowkey
      if (keyIsPressed && (keyCode === 40)){
        this.x += 1;
      }
      //Enter to end turn of unit
      if (keyIsPressed && (keyCode === 13)){
        x = moveLimit;
      }
    }
  }
}
