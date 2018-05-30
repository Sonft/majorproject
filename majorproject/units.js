let movementIterator = false;


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



function refreshABunchOfUnits(){
  for (let x = 0; x < unitsOfGreatBritain.length; x++) {
    unitsOfGreatBritain[x].refreshUnit();
  }
  for (let y = 0; y < unitsOfFrance.length; y++) {
    unitsOfFrance[y].refreshUnit();
  }
  for (let l = 0; l < unitsOfSpain.length; l++) {
    unitsOfSpain[l].refreshUnit();
  }
  for (let g = 0; g < unitsOfPortugal.length; g++) {
    unitsOfPortugal[g].refreshUnit();
  }
}







// let right, left, up, down, diagonal
// unit[x-1][y], unit[x+1][y],






class Infantry {
  constructor(x, y, h, o, movesLeft, movesRight, movesDown, movesUp, moveLimit,maxMoves, strength) {
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
    this.max = maxMoves;
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
<<<<<<< HEAD
    if (keyIsPressed && (keyCode === 39) && this.m > 0){
      if (unitMap[this.x][this.y] === 4)  {
        if (unitMap[this.x+1][this.y] === 2) {
          for (let i = 0; i < unitsOfGreatBritain.length; i++) {
            if (unitsOfGreatBritain[i].x === this.x+1 && unitsOfGreatBritain[i].y === this.y) {
              let damage = ceil(random(0,6));

              unitsOfGreatBritain[i].health = unitsOfGreatBritain[i].health - damage;
              this.x += 1;
              this.m += -1;
            }
          }
        }
      }
=======
    if ((keyCode === 39) && this.m > 0 && movementIterator === true){
      this.x += 1;
      this.m += -1;
      movementIterator = false;
      print('big goof');
>>>>>>> 220c330e29a49686af72838a5257477e63440dd5
    }
    //left arrowkey
    if ( (keyCode === 37) && this.m > 0 && movementIterator === true){
      this.x += -1;
      this.m += -1;
      movementIterator = false;
      print('big goof');
    }
    //upArrowKey
    if ((keyCode === 38) && this.m > 0 && movementIterator === true){
      this.y += -1;
      this.m += -1;
      movementIterator = false;
      print('big goof');
    }
    //down arrowkey
    if ((keyCode === 40) && this.m > 0 && movementIterator === true){
      this.y += 1;
      this.m += -1;
      movementIterator = false;
      print('big goof');
    }
    //Enter to end turn of unit
    if (keyIsPressed && (keyCode === 13) && this.m > 0){
      this.m = 0;
    }

  }
  refreshUnit(){
    if (this.m < this.max && endTurn === true){
      this.m = this.max;
    }
  }

}
