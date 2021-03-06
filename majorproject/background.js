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
  background(0, 49, 83);
  image(titleScreen, 0, 0, windowWidth/2, windowHeight);

  textSize(windowWidth/ 30);
  text(" The Imperialism Experience", windowWidth / 2, 1 * blockHeight , windowWidth/2, 20 * blockHeight);

  fill(0);
  rectMode(CENTER);
  rect( (windowWidth/ 4)*3 , 15* blockHeight, 5 * blockWidth, 4 * blockHeight );
  fill(255);
  textSize(30);
  text("Play",(windowWidth/ 4)*3 , 15* blockHeight, 5 * blockWidth, 4 * blockHeight);
  //sends to the game
  if ( mouseX > (windowWidth/ 4)*3 -2.5*blockWidth && mouseY >13* blockHeight && mouseX < (windowWidth/ 4)*3 + (2.5 * blockWidth)&& mouseY < 17* blockHeight  && mouseIsPressed) {
    gameState = 4;
    background(0);
  }

  //the aesthetics of the screen

  fill(0);
  rect((windowWidth/ 4)*3 , 19* blockHeight, 5 * blockWidth, 4 * blockHeight );
  fill(255);
  text("Rules", (windowWidth/ 4)*3 , 19* blockHeight, 5 * blockWidth, 4 * blockHeight );


  //sends to the tutorial
  if ((windowWidth/ 4)*3 -2.5*blockWidth< mouseX && mouseX < (windowWidth/ 4)*3+ 2.5 * blockWidth &&  17* blockHeight < mouseY && mouseY < 21* blockHeight&&mouseIsPressed) {
    gameState = 3;
    background(0);
  }
  rectMode(CORNER);
}

//starts the function chain that makes the world
function backGroundTwo() {
  background(0, 0, 255);
  if (endTurn === false){
    unitMap = createUnitGrid(columns, rows);
    displayGrid();
    makeEarthMap();
    unitMap = createUnitGrid(columns, rows);
    deadUnitCheck();
    displayUnitGrid();
    displayUnits();
    playerTurnFunc(playerTurn);
    headsUpDisplay(playerCountries[playerTurn]);


    // MOVE AND ATTACK WITH UNITS
    if (playerTurn === 0){

      for (let x = 0; x < unitsOfGreatBritain.length; x++) {
        unitsOfGreatBritain[x].moveThisUnit();
        if (keyIsPressed && (key === "B" || key === "b")) {
          unitsOfGreatBritain[x].conquer();
          print("AMAR IS STOOOPID");
        }
      }
    }
    if (playerTurn === 1){
      attackIterator === true;
      for (let y = 0; y < unitsOfFrance.length; y++) {
        unitsOfFrance[y].moveThisUnit();
        if (keyIsPressed && (key === "B" || key === "b")) {
          unitsOfFrance[y].conquer();
        }

      }
    }
    if (playerTurn === 2){
      attackIterator === true;
      for (let g = 0; g < unitsOfSpain.length; g++) {
        unitsOfSpain[g].moveThisUnit();
        if (keyIsPressed && (key === "B" || key === "b")) {
          unitsOfSpain[g].conquer();
        }
      }
    }
    if (playerTurn === 3){
      attackIterator === true;
      for (let i = 0; i < unitsOfPortugal.length; i++) {
        unitsOfPortugal[i].moveThisUnit();
        if (keyIsPressed && (key === "B" || key === "b")) {
          unitsOfPortugal[i].conquer();
        }
      }
    }

    //Move units across map


  }
  // if (showUnitMap === true) {
  //   displayUnitGrid();
  // }
  if (isShopOpen === true) {
    shopMenu();
  }
  //END TURN EVENTS
  if (endTurn === true){
    if (playerTurn === playerCountries.length -1){
      playerCountries[playerTurn].att === false;
      playerTurn = 0;
      refreshABunchOfUnits();//SET MOVEMENT BACK TO FULL
      print(playerTurn);//for code fixing
      endTurn = false;
      movementIterator =  false;
      for (let x=0; x< playerCountries[playerTurn].u.length;x++){
        playerCountries[playerTurn].u[x].onEnemyLand();
        print("well i guess ill die")
      }
      for (let i = 0; i < masterListOfCountry.length; i++) {
        if (masterListOfCountry[i].h < masterListOfCountry[i].mH) {
          masterListOfCountry[i].h +=masterListOfCountry[i].mH/5 ;
        }
      }


    }
    else if (playerTurn < playerCountries.length){
      playerCountries[playerTurn].att === false;
      playerTurn += 1;
      turn += 1;
      refreshABunchOfUnits();
      print(playerTurn);//for code fixing
      endTurn = false;
      movementIterator = false;
      for (let x=0; x< playerCountries[playerTurn].u.length;x++){
        playerCountries[playerTurn].u[x].onEnemyLand();
        print("well i guess ill die")
      }
    }
    // let regularChineseHealth = 75; // (tier 1)
    // let indianArabianHealth = 70; // (tier 2)
    // let norAfricaHealth = 50; // (tier 3)
    // let indoChineseHealth = 40; // (tier 4)
    // let centSouAfricaHealth = 35; // (tier 5)
    // let mexiBraziCentAmerHealth = 30; // (tier 6)
    // let westSouSouAmerHealth = 20; // (tier 7)
    // let norCanAusCaribHealth = 15; // (tier 8)
    // let quebAmerHealth = 10; // (tier 9)
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
  text("Player Combat works like dice rolls.", 10, 70);
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
  //THIS IS FOR THE SHOP
  if (isShopOpen === true && keyIsPressed && (key === "1")){
    if (playerTurn === 0){
      if (playerGreatBritain.g >= 10 && playerGreatBritain.r >= 10 && unitMap[greatBritain.x][greatBritain.y]=== 0) {
        playerGreatBritain.g += -10;
        playerGreatBritain.r += -10;
        let englishUnit = new Infantry(greatBritain.x, greatBritain.y, 10, "Great Britain",  0, 0, 0, 0, 3,3, 5, 0, 10,2);
        unitsOfGreatBritain.push(englishUnit);

      }
    }
    if (playerTurn === 1){
      if (playerFrance.g >= 10 && playerFrance.r >= 10 && unitMap[france.x][france.y]=== 0) {
        playerFrance.g += -10;
        playerFrance.r += -10;
        let frenchUnit = new Infantry(france.x , france.y, 10, "France", 0, 0, 0, 0, 3,3, 5, 0, 10,4);
        unitsOfFrance.push(frenchUnit);
      }
    }
    if (playerTurn === 2){
      if (playerSpain.g >= 10 && playerSpain.r >= 10 && unitMap[spain.x][spain.y]=== 0) {
        playerSpain.g += -10;
        playerSpain.r += -10;
        let spanishUnit = new Infantry(spain.x, spain.y, 10, "Spain", 0, 0, 0, 0, 3,3, 5, 0, 10,3);
        unitsOfSpain.push(spanishUnit);
      }

    }
    if (playerTurn === 3){
      if (playerPortugal.g >= 10 && playerPortugal.r >= 10 && unitMap[portugal.x][portugal.y]=== 0) {
        playerPortugal.g += -10;
        playerPortugal.r += -10;
        let portugeseUnit = new Infantry(portugal.x, portugal.y, 10, "Portugal",  0, 0, 0, 0, 3,3, 5, 0, 10,5);
        unitsOfPortugal.push(portugeseUnit);
      }
    }
  }






// SPLIT



  if (isShopOpen === true && keyIsPressed && (key === "2")&& turn>20){
    if (playerTurn === 0){
      if (playerGreatBritain.g >= 20 && playerGreatBritain.r >= 20 && unitMap[greatBritain.x][greatBritain.y]=== 0) {
        playerGreatBritain.g += -20;
        playerGreatBritain.r += -20;
        let englishUnit = new Infantry(greatBritain.x, greatBritain.y, 20, "Great Britain",  0, 0, 0, 0, 4,4, 7, 0, 20,2);
        unitsOfGreatBritain.push(englishUnit);

      }
    }



    if (playerTurn === 1){
      if (playerFrance.g >= 10 && playerFrance.r >= 10 && unitMap[france.x][france.y]=== 0) {
        playerFrance.g += -10;
        playerFrance.r += -10;
        let frenchUnit = new Infantry(france.x , france.y, 20, "France", 0, 0, 0, 0, 4,4, 7, 0, 20,4);
        unitsOfFrance.push(frenchUnit);
      }
    }
    if (playerTurn === 2){
      if (playerSpain.g >= 10 && playerSpain.r >= 10 && unitMap[spain.x][spain.y]=== 0) {
        playerSpain.g += -10;
        playerSpain.r += -10;
        let spanishUnit = new Infantry(spain.x, spain.y, 20, "Spain", 0, 0, 0, 0, 4,4, 7, 0, 20,3);
        unitsOfSpain.push(spanishUnit);
      }

    }
    if (playerTurn === 3){
      if (playerPortugal.g >= 10 && playerPortugal.r >= 10 && unitMap[portugal.x][portugal.y]=== 0) {
        playerPortugal.g += -10;
        playerPortugal.r += -10;
        let portugeseUnit = new Infantry(portugal.x, portugal.y, 20, "Portugal",  0, 0, 0, 0, 4,4, 7, 0, 20,5);
        unitsOfPortugal.push(portugeseUnit);
      }
    }
  }
  //Try with WASD
  if (keyIsPressed && (key === "A"|| key ==="a") || (key === "S"|| key ==="s") || (key === "D" || key ==="d")|| (key === "w"|| key ==="W")){
    movementIterator = true;
    print('big yoof');
  }

}
//0 = ocean, 1 = hovered over, 2 = Great Britain AMAR>, 3 = spain, 4 = france, 5 =portugal, 6 = uncolonized
