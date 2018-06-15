let movementIterator = false;




//This function cycles through every unit to display them
function displayUnits() {
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


//This function cycles through every unit at the end of turns to refresh their movement
 refreshABunchOfUnits() {
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





//infantry class
class Infantry {
  constructor(x, y, h, o, movesLeft, movesRight, movesDown, movesUp, moveLimit, maxMoves, strength, isSelected, maxHealth, mapCompare) {
    this.x = x;//x coord
    this.y = y;//y coord
    this.x1 = x +1;//useless
    this.y1 = y +1;//useless
    this.health = h;//health
    this.ownedBy = o;//a string that states which country owns it
    this.l = movesLeft;//useless
    this.r = movesRight;//useless
    this.u = movesUp;//useless
    this.d = movesDown;//useless
    this.m = moveLimit;//moves left this turn
    this.max = maxMoves;//maximum moves per turn
    this.s = strength;//how much damage it does
    this.isSelected = isSelected;//a boolean telling if this is selected
    this.maxHealth = maxHealth;//max health
    this.mapCompare = mapCompare;//a number vales for each country is given to compare with the map(used for attrition)
  }
  //displays images for where units are
  display(x, y, movesLeft, movesRight, movesDown, movesUp, o) {
    for (let x = this.x; x <= this.x; x++) {
      for (let y = this.y; y <= this.y; y++) {
        if (this.ownedBy === "Great Britain") {
          unitMap[x][y] = 2;
          if (showUnitMap === true && this.isSelected === 1) {
            tint(255, 255);
            image(britainUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          }
          else if (showUnitMap === true&& this.m >0) {
            tint(31, 190, 214);
            image(britainUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          }
          else if (showUnitMap === true&& this.m <=0) {
            tint("grey");
            image(britainUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          } else {
            tint(255, 67);
            image(britainUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          }
        } else if (this.ownedBy === "Spain") {
          unitMap[x][y] = 3;
          if (showUnitMap === true && this.isSelected === 1) {
            tint(255, 255);
            image(spainUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          } else if (showUnitMap === true) {
            tint("grey");
            image(spainUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          } else {
            tint(255, 67);
            image(spainUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          }
        } else if (this.ownedBy === "France") {
          unitMap[x][y] = 4;
          if (showUnitMap === true && this.isSelected === 1) {
            tint(255, 255);
            image(franceUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          } else if (showUnitMap === true) {
            tint("grey");
            image(franceUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          } else {
            tint(255, 67);
            image(franceUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          }
        } else if (this.ownedBy === "Portugal") {
          unitMap[x][y] = 5;
          if (showUnitMap === true && this.isSelected === 1) {
            tint(255, 255);
            image(portugalUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          } else if (showUnitMap === true) {
            tint("grey");
            image(portugalUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          } else {
            tint(255, 67);
            image(portugalUnit, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          }
        } else if (this.ownedBy === "DEAD") {//USELESS CODE
          unitMap[x][y] = 0;
        }
        //DISPLAYS HEALTH AND MOVES LEFT
        if(this.ownedBy !== "DEAD"){

          fill(0);
          textSize(windowWidth/ 100);
          text(this.health,x * blockWidth, y * blockHeight, blockWidth, blockHeight);
          text(this.m,(x+0.75) * blockWidth, (y+0.5) * blockHeight, blockWidth, blockHeight);
          noStroke();

        }

      }

    }
  }


//pretty self explanitory
  moveThisUnit(moveLimit) {
    //move right
    //if all the conditions to actually moce are not broken continue
    if (keyIsPressed && (key === "d" || key === "D") && this.m > 0 && movementIterator === true && this.isSelected === 1&& this.ownedBy !== "DEAD"&& showUnitMap === true && this.x < columns) {
      print("that's a lotta 1 damage");
      //this makes sure it only mose one space at a time
      movementIterator = false;
      //If there is an enemy unit
      if (unitMap[this.x][this.y] != unitMap[this.x + 1][this.y] && unitMap[this.x + 1][this.y] != 0) {
        print("that's a lotta 2 damage");
        //Checks to see which unit it is attacking
        for (let i = 0; i < playerCountries.length; i++) {
          for (let j = 0; j < playerCountries[i].u.length; j++) {
            if (playerCountries[i].u[j].x === this.x + 1 && playerCountries[i].u[j].y === this.y) {
              //Calculates and distributes damage based off of their strength numbers and health
              let damage = ceil(random(0, this.s));
              playerCountries[i].u[j].health = playerCountries[i].u[j].health - damage;
              print("that's a lotta damage");

              let damage2 = ceil(random(0, playerCountries[i].u[j].s));
              this.health = this.health - damage2;
              if (this.health <= 0) {
                this.ownedBy = "DEAD";
              }
              //If it killed the unit it was fighting move into its square
              if (playerCountries[i].u[j].health <= 0) {
                playerCountries[i].u[j].ownedBy = "DEAD";
                this.x += 1;
                this.m = this.m - this.m;
              }
              this.m = this.m - this.m;

            }
          }
        }
      }
      //If there isnt an enemy unit just move there
      else {
        this.x += 1;
        this.m += -1;
      }
    }

    //move left
    if (keyIsPressed && (key === "a" || key === "A") && this.m > 0 && movementIterator === true && this.isSelected === 1&& this.ownedBy !== "DEAD"&&showUnitMap === true && this.x >0) {
      print("that's a lotta 1 damage");
      movementIterator = false;
      if (unitMap[this.x][this.y] != unitMap[this.x - 1][this.y] && unitMap[this.x - 1][this.y] != 0) {
        print("that's a lotta 2 damage");
        for (let i = 0; i < playerCountries.length; i++) {
          for (let j = 0; j < playerCountries[i].u.length; j++) {
            if (playerCountries[i].u[j].x === this.x - 1 && playerCountries[i].u[j].y === this.y) {
              let damage = ceil(random(0, this.s));
              playerCountries[i].u[j].health = playerCountries[i].u[j].health - damage;
              print("that's a lotta damage");

              let damage2 = ceil(random(0, playerCountries[i].u[j].s));
              this.health = this.health - damage2;
              if (this.health <= 0) {
                this.ownedBy = "DEAD";
              }
              if (playerCountries[i].u[j].health <= 0) {
                playerCountries[i].u[j].ownedBy = "DEAD";
                this.x += -1;
                this.m = this.m - this.m;
              }
              this.m = this.m - this.m;
            }
          }
        }
      } else {
        this.x += -1;
        this.m += -1;
      }
    }

    //move up
    if (keyIsPressed && (key === "w" || key === "W") && this.m > 0 && movementIterator === true && this.isSelected === 1&& this.ownedBy !== "DEAD"&&showUnitMap === true&& this.y >0) {
      print("that's a lotta 1 damage");
      movementIterator = false;
      if (unitMap[this.x][this.y] != unitMap[this.x][this.y - 1] && unitMap[this.x][this.y - 1] != 0) {
        print("that's a lotta 2 damage");
        for (let i = 0; i < playerCountries.length; i++) {
          for (let j = 0; j < playerCountries[i].u.length; j++) {
            if (playerCountries[i].u[j].x === this.x && playerCountries[i].u[j].y === this.y - 1) {
              let damage = ceil(random(0, this.s));
              playerCountries[i].u[j].health = playerCountries[i].u[j].health - damage;
              print("that's a lotta damage");

              let damage2 = ceil(random(0, playerCountries[i].u[j].s));
              this.health = this.health - damage2;
              if (this.health <= 0) {
                this.ownedBy = "DEAD";
              }
              if (playerCountries[i].u[j].health <= 0) {
                playerCountries[i].u[j].ownedBy = "DEAD";
                this.y += -1;
                this.m = this.m - this.m;
              }
              this.m = this.m - this.m;
            }
          }
        }
      } else {
        this.y += -1;
        this.m += -1;
      }
    }

    //move down
    if (keyIsPressed && (key === "s" || key === "S") && this.m > 0 && movementIterator === true && this.isSelected === 1&& this.ownedBy !== "DEAD"&&showUnitMap === true&& this.y < rows) {
      print("that's a lotta 1 damage");
      movementIterator = false;
      if (unitMap[this.x][this.y] != unitMap[this.x][this.y + 1] && unitMap[this.x][this.y + 1] != 0) {
        print("that's a lotta 2 damage");
        for (let i = 0; i < playerCountries.length; i++) {
          for (let j = 0; j < playerCountries[i].u.length; j++) {
            if (playerCountries[i].u[j].x === this.x && playerCountries[i].u[j].y === this.y + 1) {
              let damage = ceil(random(0, this.s));
              playerCountries[i].u[j].health = playerCountries[i].u[j].health - damage;
              print("that's a lotta damage");

              let damage2 = ceil(random(0, playerCountries[i].u[j].s));
              this.health = this.health - damage2;
              if (this.health <= 0) {
                this.ownedBy = "DEAD";
              }
              if (playerCountries[i].u[j].health <= 0) {
                playerCountries[i].u[j].ownedBy = "DEAD";
                this.y += 1;
                this.m = this.m - this.m;
              }
              this.m = this.m - this.m;

            }
          }
        }
      } else {
        this.y += 1;
        this.m += -1;
      }
    }
    //Enter to end turn of unit
    if (keyIsPressed && (keyCode === 13) && this.m > 0 && this.isSelected === 1&& this.ownedBy !== "DEAD") {
      this.m = 0;
      if (this.health <= this.maxHealth/5 * 4) {
        this.health += floor(this.maxHealth/5);
      }

    }
  }

  //refreshes units movement
  refreshUnit() {
    if (this.m < this.max && endTurn === true) {
      this.m = this.max;
    }
  }
  //chacks to see if the mouse is within the box an has selected the unit
  selectThisUnit() {
    if (mouseX > blockWidth * this.x && mouseX < blockWidth * (this.x + 1) && mouseY > blockHeight * this.y && mouseY < blockHeight * (this.y + 1) && playerCountries[playerTurn].o === this.ownedBy&& this.ownedBy !== "DEAD") {
      this.isSelected = 1;
      print("it, in part, has worked");
      movementIterator = false;
    } else {
      this.isSelected = 0;
      movementIterator = false;
    }
  }


  //Check through master list of colonies to find the right x and y values

  conquer() {
//same logic and attacking units
    for (let i = 0; i < playerCountries[playerTurn].u.length; i++) {
      for (let j = 0; j < masterListOfCountry.length; j++) {
        if (masterListOfCountry[j].x <= playerCountries[playerTurn].u[i].x && playerCountries[playerTurn].u[i].x < masterListOfCountry[j].x1
          && masterListOfCountry[j].y <= playerCountries[playerTurn].u[i].y && playerCountries[playerTurn].u[i].y < masterListOfCountry[j].y1
          && masterListOfCountry[j].ownedBy !== this.ownedBy && this.ownedBy !== "DEAD" && this.m > 0 && masterListOfCountry[j].ownedBy !== "Uncolonizable Men" &&showUnitMap === true) {


          let damage2 = ceil(random(0, masterListOfCountry[j].s));
          playerCountries[playerTurn].u[i].health = playerCountries[playerTurn].u[i].health - damage2;
          print("damage taken");

          let damage = ceil(random(0, this.s));
          masterListOfCountry[j].h = masterListOfCountry[j].h - damage;
          print("damaged");

          if (masterListOfCountry[j].h <= 0 && playerCountries[playerTurn].u[i].health > 0) {
            masterListOfCountry[j].ownedBy = playerCountries[playerTurn].o;
          }
          if (playerCountries[playerTurn].u[i].health <= 0) {
            playerCountries[playerTurn].u[i].ownedBy = "DEAD";
          }

          this.m = this.m - this.m;

        }
        else {
          print("nope");
        }
      }
    }
  }

  //checks to see if the unit is on a tile owned by the player or no
  onEnemyLand(){
    if(map[this.x][this.y] !== this.mapCompare && (map[this.x][this.y] === 1 ||map[this.x][this.y] === 6){
      this.health += -1;
      print("taken damage");
    }
    if( map[this.x][this.y] !== this.mapCompare && (map[this.x][this.y] === 2 || map[this.x][this.y] === 3 ||map[this.x][this.y] === 4 ||map[this.x][this.y] === 5){
      this.health += -3;
      print("taken damage");
    }
  }
}

//Splices dead units with no health out of the array
function deadUnitCheck() {
  for(let i = 0; i < playerCountries.length; i++) {
    for (let j = 0; j < playerCountries[i].u.length; j++) {
      if (playerCountries[i].u[j].health <= 0) {
        playerCountries[i].u.splice(j, 1);
      }
    }
  }
}
