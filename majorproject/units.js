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
  constructor(x, y, h, o, movesLeft, movesRight, movesDown, movesUp, moveLimit,maxMoves, strength, isSelected) {
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
    this.isSelected = isSelected;

  }
  display(x, y, movesLeft, movesRight, movesDown, movesUp, o) {
    for (let x = this.x; x <= this.x; x++) {
      for (let y = this.y; y <= this.y; y++) {
        if (this.ownedBy === "Great Britain") {
          unitMap[x][y] = 2;
          if (showUnitMap === true&& this.isSelected === 1) {
            tint(255, 255);
            image(britainUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else if (showUnitMap === true){
            tint("grey");
            image(franceUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else {
            tint(255, 67);
            image(britainUnit, x *blockWidth, y * blockHeight, blockWidth, blockHeight);
          }
        }
        else if (this.ownedBy === "Spain") {
          unitMap[x][y] = 3;
          if (showUnitMap === true && this.isSelected === 1) {
            tint(255, 255);
            image(spainUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else if (showUnitMap === true){
            tint("grey");
            image(franceUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else {
            tint(255, 67);
            image(spainUnit, x *blockWidth, y*blockHeight, blockWidth, blockHeight);
          }
        }
        else if (this.ownedBy === "France") {
          unitMap[x][y] = 4;
          if (showUnitMap === true && this.isSelected === 1) {
            tint(255, 255);
            image(franceUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else if (showUnitMap === true){
            tint("grey");
            image(franceUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else {
            tint(255, 67);
            image(franceUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
        }
        else if (this.ownedBy === "Portugal") {
          unitMap[x][y] = 5;
          if (showUnitMap === true && this.isSelected === 1) {
            tint(255, 255);
            image(portugalUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
          }
          else if (showUnitMap === true){
            tint("grey");
            image(franceUnit, x *blockWidth, y *blockHeight, blockWidth, blockHeight);
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
    if ((key === "d"|| key === "D") && this.m > 0 && movementIterator === true && this.isSelected === 1){
      this.x += 1;
      this.m += -1;
      movementIterator = false;
      print('big goof');
    }
    //left arrowkey
    if ( (key === "a"|| key === "A") && this.m > 0 && movementIterator === true && this.isSelected === 1){
      this.x += -1;
      this.m += -1;
      movementIterator = false;
      print('big goof');
    }
    //upArrowKey
    if ((key === "W"|| key === "w") && this.m > 0 && movementIterator === true && this.isSelected === 1){
      this.y += -1;
      this.m += -1;
      movementIterator = false;
      print('big goof');
    }
    //down arrowkey
    if ((key === "S"|| key === "s") && this.m > 0 && movementIterator === true && this.isSelected === 1){
      this.y += 1;
      this.m += -1;
      movementIterator = false;
      print('big goof');
    }
    //Enter to end turn of unit
    if (keyIsPressed && (keyCode === 13) && this.m > 0 && this.isSelected === 1){
      this.m = 0;
    }

  }
  refreshUnit(){
    if (this.m < this.max && endTurn === true){
      this.m = this.max;
    }
  }
  selectThisUnit(){
    if(mouseX > blockWidth * this.x && mouseX < blockWidth * (this.x + 1) && mouseY > blockHeight * this.y && mouseY < blockHeight * (this.y + 1) && playerCountries[playerTurn].ownedBy === this.ownedBy){
      this.isSelected = 1;
      print("it, in part, has worked");
      movementIterator = false;
    }
    else{
      this.isSelected = 0;
      movementIterator = false;
    }
  }
}
