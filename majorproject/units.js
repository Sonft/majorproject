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
        else if (this.ownedBy === "DEAD") {
          unitMap[x][y] = 0;
        }
      }

    }
  }



  moveThisUnit(moveLimit) {
    //move right
    if (keyIsPressed &&(key === "d"|| key === "D") && this.m > 0 && movementIterator === true && this.isSelected === 1){
      print("that's a lotta 1 damage");
      movementIterator = false;
      if (unitMap[this.x][this.y] != unitMap[this.x+1][this.y] && unitMap[this.x+1][this.y] != 0)  {
        print("that's a lotta 2 damage");
        for (let i = 0; i < playerCountries.length; i++) {
          for (let j = 0; j < playerCountries[i].u.length; j++) {
            if (playerCountries[i].u[j].x === this.x + 1 && playerCountries[i].u[j].y === this.y) {
              let damage = ceil(random(0,this.s));
              playerCountries[i].u[j].health = playerCountries[i].u[j].health - damage;
              print("that's a lotta damage");
              if (playerCountries[i].u[j].health <= 0) {
                playerCountries[i].u[j].ownedBy = "DEAD";
                this.x += 1;
                this.m = this.m - this.m;
              }
              let damage2 = ceil(random(0, playerCountries[i].u[j].s));
              playerCountries[playerTurn].u[j].health = playerCountries[playerTurn].u[j].health - damage2;
              if (this.health <= 0) {
                this.ownedBy = "DEAD";
              }
              this.m = this.m - this.m;

            }
          }
        }
      }
      else {
        this.x += 1;
        this.m += -1;
      }
    }

    //move left
    if (keyIsPressed &&(key === "a"|| key === "A") && this.m > 0 && movementIterator === true && this.isSelected === 1){
      print("that's a lotta 1 damage");
      movementIterator = false;
      if (unitMap[this.x][this.y] != unitMap[this.x-1][this.y] && unitMap[this.x-1][this.y] != 0)  {
        print("that's a lotta 2 damage");
        for (let i = 0; i < playerCountries.length; i++) {
          for (let j = 0; j < playerCountries[i].u.length; j++) {
            if (playerCountries[i].u[j].x === this.x - 1 && playerCountries[i].u[j].y === this.y) {
              let damage = ceil(random(0,this.s));
              playerCountries[i].u[j].health = playerCountries[i].u[j].health - damage;
              print("that's a lotta damage");
              if (playerCountries[i].u[j].health <= 0) {
                playerCountries[i].u[j].ownedBy = "DEAD";
                this.x += -1;
                this.m = this.m - this.m;
              }
              let damage2 = ceil(random(0, playerCountries[i].u[j].s));
              playerCountries[playerTurn].u[j].health = playerCountries[playerTurn].u[j].health - damage2;
              if (this.health <= 0) {
                this.ownedBy = "DEAD";
              }
              this.m = this.m - this.m;
            }
          }
        }
      }
      else {
        this.x += -1;
        this.m += -1;
      }
    }

    //move up
    if (keyIsPressed &&(key === "w"|| key === "W") && this.m > 0 && movementIterator === true && this.isSelected === 1){
      print("that's a lotta 1 damage");
      movementIterator = false;
      if (unitMap[this.x][this.y] != unitMap[this.x][this.y-1] && unitMap[this.x][this.y-1] != 0)  {
        print("that's a lotta 2 damage");
        for (let i = 0; i < playerCountries.length; i++) {
          for (let j = 0; j < playerCountries[i].u.length; j++) {
            if (playerCountries[i].u[j].x === this.x && playerCountries[i].u[j].y === this.y - 1) {
              let damage = ceil(random(0,this.s));
              playerCountries[i].u[j].health = playerCountries[i].u[j].health - damage;
              print("that's a lotta damage");
              if (playerCountries[i].u[j].health <= 0) {
                playerCountries[i].u[j].ownedBy = "DEAD";
                this.y += -1;
                this.m = this.m - this.m;
              }
              let damage2 = ceil(random(0, playerCountries[i].u[j].s));
              playerCountries[playerTurn].u[j].health = playerCountries[playerTurn].u[j].health - damage2;
              if (this.health <= 0) {
                this.ownedBy = "DEAD";
              }
              this.m = this.m - this.m;
            }
          }
        }
      }
      else {
        this.y += -1;
        this.m += -1;
      }
    }

    //move down
    if (keyIsPressed &&(key === "s"|| key === "S") && this.m > 0 && movementIterator === true && this.isSelected === 1){
      print("that's a lotta 1 damage");
      movementIterator = false;
      if (unitMap[this.x][this.y] != unitMap[this.x][this.y+1] && unitMap[this.x][this.y+1] != 0)  {
        print("that's a lotta 2 damage");
        for (let i = 0; i < playerCountries.length; i++) {
          for (let j = 0; j < playerCountries[i].u.length; j++) {
            if (playerCountries[i].u[j].x === this.x && playerCountries[i].u[j].y === this.y + 1) {
              let damage = ceil(random(0,this.s));
              playerCountries[i].u[j].health = playerCountries[i].u[j].health - damage;
              print("that's a lotta damage");
              if (playerCountries[i].u[j].health <= 0) {
                playerCountries[i].u[j].ownedBy = "DEAD";
                this.y += 1;
                this.m = this.m - this.m;
              }
              let damage2 = ceil(random(0, playerCountries[i].u[j].s));
              playerCountries[playerTurn].u[j].health = playerCountries[playerTurn].u[j].health - damage2;
              if (this.health <= 0) {
                this.ownedBy = "DEAD";
              }
              this.m = this.m - this.m;

            }
          }
        }
      }
      else {
        this.y += 1;
        this.m += -1;
      }
    }
    //Enter to end turn of unit
    if (keyIsPressed && (keyCode === 13) && this.m > 0 && this.isSelected === 1){
      this.m = 0;
    }
  }


  refreshUnit() {
    if (this.m < this.max && endTurn === true){
      this.m = this.max;
    }
  }
  selectThisUnit(){
    if(mouseX > blockWidth * this.x && mouseX < blockWidth * (this.x + 1) && mouseY > blockHeight * this.y && mouseY < blockHeight * (this.y + 1) && playerCountries[playerTurn].o === this.ownedBy){
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
