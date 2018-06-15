

function playerObjects() {
  playerGreatBritain = new Player(
    "Great Britain",
    0,
    0,
    unitsOfGreatBritain,
    false
  );

  playerFrance = new Player(
    "France",
    0,
    0,
    unitsOfFrance,
    false
  );

  playerSpain = new Player(
    "Spain",
    0,
    0,
    unitsOfSpain,
    false
  );

  playerPortugal = new Player(
    "Portugal",
    0,
    0,
    unitsOfPortugal,
    false
  );
}

//this is a function that asks the players how many will be playing!
function askPlayerAmount() {
  stroke(0);
  background(0);
  fill(225,20,20);

  rect(0, 0, windowWidth/2, windowHeight / 2);//top left === 1
  image(britainUnit,0, 0, windowWidth/2, windowHeight / 2);
  fill(0);
  text("Press 1 to play with 1 player", 50,50);
  if ( keyIsPressed && key === "1") {
    playerCountries.push(playerGreatBritain);
    gameState = 2;
  }

  fill(0,150,255);
  rect(windowWidth/2, 0, windowWidth, windowHeight / 2);//top right === 2
  image(franceUnit,windowWidth/2, 0, windowWidth/2, windowHeight / 2);
  fill(0);
  text("Press 2 to play with 2 players", windowWidth/2 + 50, 50);
  if (keyIsPressed && key === "2") {
    playerCountries.push(playerGreatBritain, playerFrance);
    gameState = 2;
  }

  fill(225,160, 10);
  rect(0, windowHeight/2, windowWidth/2, windowHeight);// nottam left === 3
  image(spainUnit,0, windowHeight/2, windowWidth/2, windowHeight/2 );
  fill(0);
  text("Press 3 to play with 3 players", 50, windowHeight/2 + 50);
  if (keyIsPressed && key === "3") {
    playerCountries.push(playerGreatBritain, playerFrance, playerSpain);
    gameState = 2;
  }

  fill(58, 190, 58);
  rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);//botttomm right === 4
  image(portugalUnit,windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);
  fill(0);
  text("Press 4 to play with 4 players", windowWidth/2 + 50, windowHeight / 2 + 50);
  if (keyIsPressed && key === "4") {
    playerCountries.push(playerGreatBritain, playerFrance, playerSpain, playerPortugal);
    gameState = 2;
  }
  noStroke();

}
//THIS IS THE INFO FOR EVERY COUNTRY: HUD USES THIS, THE GAME WILL CHANGE THIS DEPENDING ON WHAT HAPPENS IN TURNS (IE. events, turn transitions,etc)
class Player {
  constructor(ownedBy, gold, resources, units,addedThisTurn) {
    this.o = ownedBy;
    this.g = gold;
    this.r = resources;
    this.u = units;
    this.att = addedThisTurn;
  }
  determineColonies(colonies) {

  }
  calculation(colonies) {

  }
}
