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
let coloniesOfGreatBritain = [];
let coloniesOfFrance = [];
let coloniesOfSpain = [];
let coloniesOfPortugal = [];
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

  //THIS IS US CREATING THE PLAYER COUNTRIES AS A SEPERATE OBJECT THAT WILL INTERACT WITH THE HUD
  playerObjects();


  // playerCountries.push(
  //   playerGreatBritain,
  //   playerFrance,
  //   playerSpain,
  //   playerPortugal
  //
  // );


  //THIS IS A LIST OF ALL THE COUNTIES
  masterListOfCountry.push(
    alaska,
    britishColumbia,
    yukon,
    northWest,
    GoSL,
    quebec,
    //American
    cascadian,
    louisiana,
    eastAmerica,
    florida,
    //Central America
    mexico,
    centAmeri,
    panama,
    cuba,
    //South America
    venezuela,
    guinea,
    bolivia,
    brazil,
    peru,
    chile,
    laPlata,
    uruguay,
    //Western Europe
    greatBritain,
    portugal,
    spain,
    france,
    //Rest Of Europe
    restOfEurope,
    italy,
    scandinavia,
    //North Africa
    morocco,
    algeria,
    tunis,
    egypt,
    //Central Africa
    middleAfrica,
    //South/Central Africa
    westCongo,
    congo,
    somalia,
    mombasa,
    southAfrica,
    madagascar,
    //Middle East + India
    iran,
    afganistan,
    pakistan,
    arabia,
    india,
    sriLanka,
    //Russia and Japan
    russia,
    japan,
    northSiberia,
    southSiberia,
    //China + IndoChina
    mongolia,
    tibet,
    centralChina,
    easternChina,
    southChina,
    indoChina,
    //Oceania
    indonesia,
    australia

  );
}
//just calls other functions
function draw() {

  checkState();
}

class Infantry {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.health = h;
  }
  display() {

  }
}
