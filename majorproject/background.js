//determines which screen the game needs to show
function checkState() {
  if (gameState === 1) {
    backGroundOne();
  }
  else if (gameState === 2) {
    backGroundTwo();
  }
  else if (gameState === 3) {
    backGroundThree();
  }
  else if (gameState === 4) {
    askPlayerAmount();
  }
}

//makes the home screen
function backGroundOne() {
  //the aesthetics of the screen
  background(0, 150, 130);
  fill(0);
  rect(windowWidth / 2 - 100, windowHeight / 2 - 50, 100, 100);
  fill(255);
  textSize(30);
  text("Play", windowWidth / 2 - 80, windowHeight / 2);

  //sends to the game
  if (windowWidth / 2 - 100 < mouseX && mouseX < windowWidth / 2 && windowHeight / 2 - 50 < mouseY && mouseY < windowHeight / 2 + 50 && mouseIsPressed) {
    gameState = 4;
    background(0);
  }
  //the aesthetics of the screen

  fill(0);
  rect(windowWidth / 2 - 100, windowHeight / 2 + 200, 100, 100);
  fill(255);
  text("Rules", windowWidth / 2 - 100, windowHeight / 2 + 250);


  //sends to the tutorial
  if (windowWidth / 2 - 100 < mouseX && mouseX < windowWidth / 2 + 100 && windowHeight / 2 + 200 < mouseY && mouseY < windowHeight / 2 + 300 && mouseIsPressed) {
    gameState = 3;
    background(0);
  }
}

//starts the function chain that makes the world
function backGroundTwo() {
  background(0, 0, 255);
  if (endTurn === false){
    displayGrid();
    makeEarthMap();
    displayUnitGrid();
    displayUnits();
    playerTurnFunc(playerTurn);
    headsUpDisplay(playerCountries[playerTurn]);



    //Move units across map

    if (playerTurn === 0){
      for (let x = 0; x < unitsOfGreatBritain.length; x++) {
        unitsOfGreatBritain[x].moveThisUnit();
      }
    }
    if (playerTurn === 1){
      for (let y = 0; y < unitsOfFrance.length; y++) {
        unitsOfFrance[y].moveThisUnit();
        print(111);
      }
    }
    if (playerTurn === 2){
      for (let g = 0; g < unitsOfSpain.length; g++) {
        unitsOfSpain[g].moveThisUnit();
      }
    }
    if (playerTurn === 3){
      for (let g = 0; g < unitsOfPortugal.length; g++) {
        unitsOfPortugal[g].moveThisUnit();
      }
    }
  }
  // if (showUnitMap === true) {
  //   displayUnitGrid();
  // }
  if (isShopOpen === true) {
    shopMenu();
  }
  if (endTurn === true){
    if (playerTurn === playerCountries.length -1){
      playerCountries[playerTurn].att === false;
      playerTurn = 0;
      refreshABunchOfUnits();
      print(playerTurn);//for code fixing
      endTurn = false;
    }
    else if (playerTurn < playerCountries.length){
      playerCountries[playerTurn].att === false;
      playerTurn += 1;

      refreshABunchOfUnits();
      print(playerTurn);//for code fixing
      endTurn = false;
    }
  }
}
//makes the tutorial screen
function backGroundThree() {
  background(0, 0, 0);
  fill(255, 0, 0);
  rect(windowWidth - 50, 0, 50, 50);
  fill(255);
  textSize(30);
  text("these are the rules", 10, 50);
  //Player Combat works like dice rolls.
  //Unit movement works depending on unit, tech, and number of squares moved.
  //There are four large colonizing european nations.
  //There are 58 provinces in total and each province counts as a certain amount of score.
  //Gold, units, provinces, resources, all count towards the end score.
  //The end score determines who wins the game.
  //There are many ways to win the game, from colonizing rapidly
  //To colonizing late and conquering your opponents.
  //The game is meant to be a constant struggle and colonies can flip loyalty at any time.
  //You spend gold and resources to gain units which help you conquer others.
  //The game lasts 100 turns, from the 1700s till 1800.
  //To colonize a province, simply --------------
  //To move units, do ----------------
  //To attack, select your own units, and then select an enemy unit within range.
  //The dice rolls are based on chance, however, some units will have higher rolls than others based on cost.
  //There are two types of units, one unit that can only move on land, and others that can only move on water.
  //There will be units that can transport land units over water.
  //The places that are blacked out are either uncolonizable countries, or future countries that will be added to the game.
  //

  //the exit button
  if (windowWidth > mouseX && windowWidth - 50 < mouseX && 50 > mouseY && 0 < mouseY && mouseIsPressed) {
    gameState = 1;
  }
}

function keyTyped() {
  if (keyIsPressed && (key === "m" || key === "M")) {
    showUnitMap = !showUnitMap;
  }
  if (isShopOpen === true && keyIsPressed && (key === "U"|| key ==="u")){
    if (playerTurn === 0){
      if (playerGreatBritain.g > 10 && playerGreatBritain.r > 10 && unitMap[greatBritain.x][greatBritain.y]=== 0) {
        playerGreatBritain.g += -10;
        playerGreatBritain.r += -10;
        let englishUnit = new Infantry(greatBritain.x, greatBritain.y, 50, "Great Britain",  0, 0, 0, 0, 3,3, 4);
        unitsOfGreatBritain.push(englishUnit);
      }
    }
    if (playerTurn === 1){
      if (playerFrance.g > 10 && playerFrance.r > 10 && unitMap[france.x][france.y]=== 0) {
        playerFrance.g += -10;
        playerFrance.r += -10;
        let frenchUnit = new Infantry(france.x , france.y, 50, "France", 0, 0, 0, 0, 3,3, 4);
        unitsOfFrance.push(frenchUnit);
      }
    }
    if (playerTurn === 2){
      if (playerSpain.g > 10 && playerSpain.r > 10 && unitMap[spain.x][spain.y]=== 0) {
        playerSpain.g += -10;
        playerSpain.r += -10;
        let spanishUnit = new Infantry(spain.x, spain.y, 50, "Spain", 0, 0, 0, 0, 3,3, 4);
        unitsOfSpain.push(spanishUnit);
      }

    }
    if (playerTurn === 3){
      if (playerPortugal.g > 10 && playerPortugal.r > 10 && unitMap[portugal.x][portugal.y]=== 0) {
        playerPortugal.g += -10;
        playerPortugal.r += -10;
        let portugeseUnit = new Infantry(portugal.x, portugal.y, 50, "Portugal",  0, 0, 0, 0, 3,3, 4);
        unitsOfPortugal.push(portugeseUnit);
      }
    }
  }
}
