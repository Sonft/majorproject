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

//setting variables
let gameState = 1;
let playerTurn = 0;
let countryInfoClicked = 0;
let blockWidth;
let blockHeight;
let columns = 54;
let rows = 41;
let map;

//units! Bois
let infantry;

//Colonies of the player COUNTRIES
// let coloniesOfGreatBritain = [];
// let coloniesOfFrance = [];
// let coloniesOfSpain = [];
// let coloniesOfPortugal = [];
//THE UNITS OF EACH GREAT POWER
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
  blockWidth = windowWidth / columns;
  blockHeight = windowHeight / rows;
  map = createGrid(columns, rows);
  makeProvinceVariables();
  noStroke();

  //THIS IS US CREATING THE PLAYER COUNTRIES AS A SEPERATE OBJECT THAT WILL INTERACT WITH THE HUD
  playerObjects();


  // playerCountries.push(
  //   playerGreatBritain,
  //   playerFrance,
  //   playerSpain,
  //   playerPortugal
  //
  // );

  pushAllTheCountries();
}
//just calls other functions
function draw() {

  checkState();
}
