//actually displays the map
//colour list appears as follows: 0 = ocean, 1 = hovered over, 2 = Great Britain AMAR>, 3 = spain, 4 = france, 5 =portugal, 6 = uncolonized
function displayGrid() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      if (map[x][y] === 1) {
        fill(70, 70, 70);
      }
      else if (map[x][y] === 2) {
        fill(255, 0, 0);
      }
      else if (map[x][y] === 3) {
        fill(255, 204, 0);
      }
      else if (map[x][y] === 4) {
        fill(0, 0, 255);
      }
      else if (map[x][y] === 5) {
        fill(0, 255, 0);
      }
      else if (map[x][y] === 6) {
        fill(255);
      }
      else if (map[x][y] === 7) {
        fill(0);
      }
      else {
        fill(0, 150, 255);
      }
      //actually makes the grid
      rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
    }
  }
}

//DISPLAY FUNCTION USES THIS
//countries call on this to see if they are being clicked
function isClicked(x1, y1, x2, y2, countryName, gold, resources, isClicked, ownedBy) {
  if (isClicked === 1 && showUnitMap === false && isShopOpen === false) {
    fill(255);
    rect(windowWidth / 2 - 100, windowHeight / 2 - 100, 210, 210);
    fill(0);
    textSize(13);
    text("This is " + countryName, windowWidth / 2 - 90, windowHeight / 2 - 80);
    text("It is owned by: " + ownedBy, windowWidth / 2 - 90, windowHeight / 2 - 40);
    text("It has this many resources: " + resources, windowWidth / 2 - 90, windowHeight / 2);
    text("It has this much gold: " + gold, windowWidth / 2 - 90, windowHeight / 2 + 40);
    text("Press C to remove this page!", windowWidth / 2 - 90, windowHeight / 2 + 80);
  }
}



//THE DISPLAY FUNCTION USES THIS TOO
//input coordinates and it tells you if the mouse is clicking inside of them
function clickOnCountry(x1, y1, x2, y2) {
  if (showUnitMap === false || isShopOpen === false) {
    return x1 * blockWidth < mouseX && mouseX < x2 * blockWidth && y1 * blockHeight < mouseY && mouseY < y2 * blockHeight && mouseIsPressed;
  }
}



//THE DISPLAY FUNCTION USES THIS TOO ALSO
//just checks if you moused over a thing
function countryMousedOver(x1, y1, x2, y2) {
  if (x1 * blockWidth < mouseX && mouseX < x2 * blockWidth && y1 * blockHeight < mouseY && mouseY < y2 * blockHeight && showUnitMap === false) {
    return true;
  }
}




// THE SETUP FUNCTION USES THIS

//creates an empty grid that will be used as the map
function createGrid(columns, rows) {
  let randomGrid = [];
  for (let x = 0; x < columns; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

function createUnitGrid(columns, rows) {
  let randomUnitGrid = [];
  for (let x = 0; x < columns; x++) {
    randomUnitGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomUnitGrid[x].push(0);
    }
  }
  return randomUnitGrid;
}

function displayUnitGrid() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      if (unitMap[x][y] === 2) {
        if (showUnitMap === true) {
          tint(255, 255);
          image(britainUnit, x *blockWidth, y * blockHeight, blockWidth, blockHeight);
        }
        else {
          tint(255, 67);
          image(britainUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
        }
      }
      else if (unitMap[x][y] === 3) {
        if (showUnitMap === true) {
          tint(255, 255);
          image(spainUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
        }
        else {
          tint(255, 67);
          image(spainUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
        }
      }
      else if (unitMap[x][y] === 4) {
        if (showUnitMap === true) {
          tint(255, 255);
          image(franceUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
        }
        else {
          tint(255, 67);
          image(franceUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
        }
      }
      else if (unitMap[x][y] === 5) {
        if (showUnitMap === true) {
          tint(255, 255);
          image(portugalUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
        }
        else {
          tint(255, 67);
          image(portugalUnit, x * blockWidth, y *blockHeight, blockWidth, blockHeight);
        }
      }

      //actually makes the grid
      fill(255, 0);
      rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
    }
  }
}
