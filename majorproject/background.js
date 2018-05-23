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
    playerTurnFunc(playerTurn);
    headsUpDisplay(playerCountries[playerTurn]);
  }
  if (showUnitMap === true) {
    displayUnitGrid();
  }
  if (isShopOpen === true) {
    shopMenu();
  }
  if (endTurn === true){
    if (playerTurn === playerCountries.length -1){
      playerCountries[playerTurn].att === false;
      endTurn = false;
      playerTurn = 0;
      print(playerTurn);//for code fixing
    }
    else if (playerTurn < playerCountries.length){
      playerCountries[playerTurn].att === false;
      playerTurn += 1;
      endTurn = false;
      print(playerTurn);//for code fixing
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
}
