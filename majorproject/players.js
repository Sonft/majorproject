

function playerObjects() {
  playerGreatBritain = new Player(
    "Great Britain",
    0,
    0,
    coloniesOfGreatBritain,
    unitsOfGreatBritain,
    false
  );

  playerFrance = new Player(
    "France",
    0,
    0,
    coloniesOfFrance,
    unitsOfFrance,
    false
  );

  playerSpain = new Player(
    "Spain",
    0,
    0,
    coloniesOfSpain,
    unitsOfSpain,
    false
  );

  playerPortugal = new Player(
    "Portugal",
    0,
    0,
    coloniesOfPortugal,
    unitsOfPortugal,
    false
  );
}

//this is a function that asks the players how many will be playing!
function askPlayerAmount() {
  background(0);
  fill(0,255,0);

  rect(0, 0, windowWidth/2, windowHeight / 2);//top left === 1
  if ( keyIsPressed && key === "1") {
    playerCountries.push(playerGreatBritain);
    gameState = 2;

  }
  fill(255,0,0);
  rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);//botttomm right === 4
  if (keyIsPressed && key === "4") {
    playerCountries.push(playerGreatBritain, playerFrance, playerSpain, playerPortugal);
    gameState = 2;
  }

  fill(0,0,255);
  rect(0, windowHeight/2, windowWidth/2, windowHeight);// nottam left === 3
  if (keyIsPressed && key === "3") {
    playerCountries.push(playerGreatBritain, playerFrance, playerSpain);
    gameState = 2;
  }

  fill(0,255,70);
  rect(windowWidth/2, 0, windowWidth, windowHeight / 2);//top right === 2
  if (keyIsPressed && key === "2") {
    playerCountries.push(playerGreatBritain, playerFrance);
    gameState = 2;
  }

}
//THIS IS THE INFO FOR EVERY COUNTRY: HUD USES THIS, THE GAME WILL CHANGE THIS DEPENDING ON WHAT HAPPENS IN TURNS (IE. events, turn transitions,etc)
class Player {
  constructor(ownedBy, gold, resources, colonies, units,addedThisTurn) {
    this.o = ownedBy;
    this.g = gold;
    this.r = resources;
    this.c = colonies;
    this.u = units;
    this.att = addedThisTurn;
  }
  determineColonies(colonies) {

  }
  calculation(colonies) {

  }
}
