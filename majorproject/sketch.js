//Amar Minhas + Jerry Xiao Peer Programming Project
//this project is a continuation of our previous projects
//We both worked on the same computer so the coding was mainly uniform. We talked to each other about the solutions
//(Jerry is better at typing so he wrote most of the code - Amar)
//Amar wrote most of the functions and the ideas
//Jerry wrote all of the objects and put the functions into class functions
//Amar thought of the map and created the bedrock of the game board//you can't mine bedrock
//Jerry did a lot of the tedious but completely necessary work.
//Amar cleaned up the goddamn code, Jerry.
//At least Jerry made code, Amar.
//I was here on the ground floor Jerry, do you even love this project? are you even invested?
//This is my child Amar.

//To work on for later
//Bombardment and insturctions
//Text on france HUD
//Units can move without being in unit map mode
//Show number of moves left with unit
//Show the health more clearly
//Units move on top of the information bar for countries
//Make it clear which country is playing currently
//Explain how to attack province
//Test1

//setting variables
let gameState = 1;
let playerTurn = 0;
let countryInfoClicked = 0;
let blockWidth;
let blockHeight;
let columns = 54;
let rows = 41;
let map;
let unitMap;
let showUnitMap;
let isShopOpen = false;
let attackIterator = true;

//units! Bois
let infantry;

let spainUnit;
let britainUnit;
let portugalUnit;
let franceUnit;

// tier 9 = 10; tier 8 = 15; tier 7 = 20; tier 6 = 30; tier 5 = 35; tier 4 = 40; tier 3 = 50; tier 2 = 70; tier 1 = 75;

let regularChineseHealth = 75; // (tier 1)
let indianArabianHealth = 70; // (tier 2)
let norAfricaHealth = 50; // (tier 3)
let indoChineseHealth = 40; // (tier 4)
let centSouAfricaHealth = 35; // (tier 5)
let mexiBraziCentAmerHealth = 30; // (tier 6)
let westSouSouAmerHealth = 20; // (tier 7)
let norCanAusCaribHealth = 15; // (tier 8)
let quebAmerHealth = 10; // (tier 9)



let frenchUnit;
//Colonies of the player COUNTRIES
// let coloniesOfGreatBritain = [];
// let coloniesOfFrance = [];
// let coloniesOfSpain = [];
// let coloniesOfPortugal = [];
//THE UNITS OF EACH GREAT POWER
let masterListOfUnits = [];
let unitsOfGreatBritain = [];
let unitsOfFrance = [];
let unitsOfSpain = [];
let unitsOfPortugal = [];
//creating variables for objects
let masterListOfCountry = [];
let playerCountries = [];

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.documentElement.style.overflow = "hidden";
  //Creating a grid

  portugalUnit = loadImage("images/portugal.PNG");
  franceUnit = loadImage("images/france.PNG");
  britainUnit = loadImage("images/britain.PNG");
  spainUnit = loadImage("images/spain.PNG");
  showUnitMap = false;

  blockWidth = windowWidth / columns;
  blockHeight = windowHeight / rows;
  unitMap = createUnitGrid(columns, rows);
  map = createGrid(columns, rows);
  makeProvinceVariables();
  noStroke();
  rectMode(CORNER);

  //THIS IS US CREATING THE PLAYER COUNTRIES AS A SEPERATE OBJECT THAT WILL INTERACT WITH THE HUD
  playerObjects();
  pushAllTheCountries();
  playerFrance.r = playerFrance.r + 10;
  playerFrance.g = playerFrance.g + 10;
  playerGreatBritain.r = playerGreatBritain.r + 10;
  playerGreatBritain.g = playerGreatBritain.g + 10;
  playerPortugal.r = playerPortugal.r + 10;
  playerPortugal.g = playerPortugal.g + 10;
  playerSpain.r = playerSpain.r + 10;
  playerSpain.g = playerSpain.g + 10;
}
//just calls other functions
function draw() {
  checkState();
}
