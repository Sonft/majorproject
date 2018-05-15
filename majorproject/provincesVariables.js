//Canadian Objects
let alaska;
let britishColumbia;
let yukon;
let northWest;
let GoSL;
let quebec;
//American
let cascadian;
let louisiana;
let eastAmerica;
let florida;
//Central America
let mexico;
let centAmeri;
let panama;
let cuba;
//South America
let venezuela;
let guinea;
let bolivia;
let brazil;
let peru;
let chile;
let laPlata;
let uruguay;
//Western Europe
let greatBritain;
let portugal;
let spain;
let france;
//Rest Of Europe
let restOfEurope;
let italy;
let scandinavia;
//North Africa
let morocco;
let algeria;
let tunis;
let egypt;
//Central Africa
let middleAfrica;
//South/Central Africa
let westCongo;
let congo;
let somalia;
let mombasa;
let southAfrica;
let madagascar;
//Middle East + India
let iran;
let afganistan;
let pakistan;
let arabia;
let india;
let sriLanka;
//Russia and Japan
let russia;
let japan;
let northSiberia;
let southSiberia;
//China + IndoChina
let mongolia;
let tibet;
let centralChina;
let easternChina;
let southChina;
let indoChina;
//Oceania
let indonesia;
let australia;
//VARIABLES FOR THE PLAYER COUNTRY OBJECTS
let playerGreatBritain;
let playerFrance;
let playerSpain;
let playerPortugal;


function makeProvinceVariables() {
  //setting objects
  //Canadian Cores
  alaska = new Province("Alaska", 0, 2, 0, 2, "No One", 2, 3, 0);
  britishColumbia = new Province("British Columbia", 2, 3, 0, 5, "No One", 0, 0, 0);
  yukon = new Province("Yukon", 3, 6, 0, 5, "No One", 0, 0, 0);
  northWest = new Province("Northwest Territories", 6, 12, 0, 5, "No One", 0, 0, 0);
  GoSL = new Province("Gulf Of St.Lawrence", 12, 14, 4, 8, "No One", 0, 0, 0);
  quebec = new Province("Quebec", 14, 17, 1, 6, "France", 2, 5, 0);
  //'Murica
  cascadian = new Province("Cascadia", 3, 6, 5, 10, "No One", 0, 0, 0);
  louisiana = new Province("Louisiana", 6, 10, 5, 10, "No One", 0, 0, 0);
  eastAmerica = new Province("Eastern America", 10, 12, 5, 10, "No One", 0, 0, 0);
  florida = new Province("Florida", 10, 12, 10, 12, "No One", 0, 0, 0);
  //Central America
  mexico = new Province("Mexico", 4, 8, 10, 14, "No One", 0, 0, 0);
  centAmeri = new Province("Central America", 6, 8, 14, 17, "No One", 0, 0, 0);
  panama = new Province("Panama", 8, 10, 16, 17, "No One", 0, 0, 0);
  cuba = new Province("Cuba", 10, 13, 14, 15, "No One", 0, 0, 0);
  //South America
  venezuela = new Province("Venezuela", 9, 11, 17, 19, "No One", 0, 0, 0);
  guinea = new Province("Guinea", 11, 15, 18, 19, "No One", 0, 0, 0);
  bolivia = new Province("Bolivia", 7, 10, 19, 22, "No One", 0, 0, 0);
  brazil = new Province("Brazil", 10, 17, 19, 26, "No One", 0, 0, 0);
  peru = new Province("Peru", 8, 10, 22, 25, "No One", 0, 0, 0);
  chile = new Province("Chile", 9, 10, 25, 35, "No One", 0, 0, 0);
  laPlata = new Province("La Plata", 10, 12, 26, 33, "No One", 0, 0, 0);
  uruguay = new Province("Uruguay", 12, 15, 26, 29, "No One", 0, 0, 0);
  //Western Europe
  greatBritain = new Province("Great Britain", 20, 22, 5, 8, "Great Britain", 0, 0, 0);
  france = new Province("France", 22, 25, 9, 11, "France", 0, 0, 0);
  portugal = new Province("Portugal", 21, 22, 11, 13, "Portugal", 0, 0, 0);
  spain = new Province("Spain", 22, 24, 11, 13, "Spain", 0, 0, 0);
  //Rest of Europe
  restOfEurope = new Province("the Rest Of Europe", 25, 32, 8, 12, "Uncolonizable Men", 0, 0, 0);
  italy = new Province("Italy", 27, 29, 12, 14, "Uncolonizable Men", 0, 0, 0);
  scandinavia = new Province("Scandinavia", 25, 32, 2, 5, "Uncolonizable Men", 0, 0, 0);
  //North Africa
  morocco = new Province("Morocco", 21, 23, 16, 22, "No One", 0, 0, 0);
  algeria = new Province("Algeria", 23, 26, 15, 19, "No One", 0, 0, 0);
  tunis = new Province("Tunis", 26, 29, 15, 19, "No One", 0, 0, 0);
  egypt = new Province("Egypt", 29, 32, 16, 19, "No One", 0, 0, 0);
  //Middle Africa
  middleAfrica = new Province("Central Africa", 23, 29, 19, 23, "Uncolonizable Men", 0, 0, 0);
  //South/Central Africa
  westCongo = new Province("West Congo", 24, 26, 23, 29, "No One", 0, 0, 0);
  congo = new Province("Congo", 26, 29, 23, 29, "No One", 0, 0, 0);
  somalia = new Province("Somalia", 29, 32, 19, 24, "No One", 0, 0, 0);
  mombasa = new Province("Mombasa", 29, 30, 24, 30, "No One", 0, 0, 0);
  southAfrica = new Province("South Africa", 25, 29, 29, 32, "No One", 0, 0, 0);
  madagascar = new Province("Madagascar", 32, 34, 26, 29, "No One", 0, 0, 0);
  //Middle East and India
  iran = new Province("Iran", 32, 37, 13, 16, "No One", 0, 0, 0);
  afganistan = new Province("Afganistan", 37, 42, 13, 16, "No One", 0, 0, 0);
  pakistan = new Province("Pakistan", 36, 38, 16, 18, "No One", 0, 0, 0);
  arabia = new Province("Arabia", 33, 36, 16, 21, "No One", 0, 0, 0);
  india = new Province("India", 38, 42, 16, 22, "No One", 0, 0, 0);
  sriLanka = new Province("Sri Lanka", 43, 44, 22, 24, "No One", 0, 0, 0);
  //Russia and Japan
  russia = new Province("Russia", 32, 37, 3, 13, "Uncolonizable Men", 0, 0, 0);
  japan = new Province("Japan", 53, 54, 15, 19, "Uncolonizable Men", 0, 0, 0);
  northSiberia = new Province("Northern Siberia", 37, 54, 2, 7, "No One", 0, 0, 0);
  southSiberia = new Province("Southern Siberia", 37, 53, 7, 13, "No One", 0, 0, 0);
  //China and IndoChina
  mongolia = new Province("Mongolia", 42, 50, 13, 15, "No One", 0, 0, 0);
  tibet = new Province("Tibet", 42, 46, 15, 18, "No One", 0, 0, 0);
  centralChina = new Province("Central China", 46, 50, 15, 18, "No One", 0, 0, 0);
  easternChina = new Province("Eastern China", 50, 51, 13, 19, "No One", 0, 0, 0);
  southChina = new Province("South China", 42, 50, 18, 19, "No One", 0, 0, 0);
  indoChina = new Province("IndoChina", 46, 49, 19, 23, "No One", 0, 0, 0);
  //Oceania
  indonesia = new Province("Indonesia", 47, 53, 26, 27, "No One", 0, 0, 0);
  australia = new Province("Australia", 47, 53, 31, 36, "No One", 0, 0, 0);
}
