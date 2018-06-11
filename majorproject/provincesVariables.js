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

  //THIS IS A LIST OF ALL THE COUNTIES
  //Name, x, x1, y, y1, Owned By, Gold, Resources, some shit we don't need to worry about, health, strength

  // // tier 9 = 10; tier 8 = 15; tier 7 = 20; tier 6 = 30; tier 5 = 35; tier 4 = 40; tier 3 = 50; tier 2 = 70; tier 1 = 75;
  //
  // let regularChineseHealth = 75; // (tier 1)
  // let indianArabianHealth = 70; // (tier 2)
  // let norAfricaHealth = 50; // (tier 3)
  // let indoChineseHealth = 40; // (tier 4)
  // let centSouAfricaHealth = 35; // (tier 5)
  // let mexiBraziCentAmerHealth = 30; // (tier 6)
  // let westSouSouAmerHealth = 20; // (tier 7)
  // let norCanAusCaribHealth = 15; // (tier 8)
  // let quebAmerHealth = 10; // (tier 9)

  //Canadian Cores
  alaska = new Province("Alaska", 0, 2, 0, 2,
    "No One", 0, 2, 0, norCanAusCaribHealth, 6, norCanAusCaribHealth);
  britishColumbia = new Province("British Columbia", 2, 3, 0, 5,
    "No One", 1, 2, 0, norCanAusCaribHealth, 6, norCanAusCaribHealth);
  yukon = new Province("Yukon", 3, 6, 0, 5,
    "No One", 2, 1, 0, norCanAusCaribHealth, 6);
  northWest = new Province("Northwest Territories", 6, 12, 0, 5,
    "No One", 0, 1, 0, norCanAusCaribHealth, 6, norCanAusCaribHealth);
  //'Murica
  GoSL = new Province("Gulf Of St.Lawrence", 12, 14, 4, 8,
    "No One", 3, 1, 0, quebAmerHealth, 5, quebAmerHealth);
  quebec = new Province("Quebec", 14, 17, 1, 6,
    "No One", 1, 3, 0, quebAmerHealth, 6, quebAmerHealth);
  cascadian = new Province("Cascadia", 3, 6, 5, 10,
    "No One", 2, 1, 0, quebAmerHealth, 4, quebAmerHealth);
  louisiana = new Province("Louisiana", 6, 10, 5, 10,
    "No One", 1, 3, 0, quebAmerHealth, 5, quebAmerHealth);
  eastAmerica = new Province("Eastern America", 10, 12, 5, 10,
    "No One", 4, 1, 0, quebAmerHealth, 5, quebAmerHealth);
  florida = new Province("Florida", 10, 12, 10, 12,
    "No One", 3, 1, 0, quebAmerHealth, 5, quebAmerHealth);
  //Central America
  mexico = new Province("Mexico", 4, 8, 10, 14,
    "No One", 9, 2, 0, mexiBraziCentAmerHealth, 15, mexiBraziCentAmerHealth);
  centAmeri = new Province("Central America", 6, 8, 14, 17,
    "No One", 4, 3, 0, mexiBraziCentAmerHealth, 9, mexiBraziCentAmerHealth);
  panama = new Province("Panama", 8, 10, 16, 17,
    "No One", 5, 1, 0, mexiBraziCentAmerHealth, 6, mexiBraziCentAmerHealth);
  cuba = new Province("Cuba", 10, 13, 14, 15,
    "No One", 7, 3, 0, mexiBraziCentAmerHealth, 4, mexiBraziCentAmerHealth);
  //South America
  venezuela = new Province("Venezuela", 9, 11, 17, 19,
    "No One", 2, 2, 0, mexiBraziCentAmerHealth, 8, mexiBraziCentAmerHealth);
  guinea = new Province("Guinea", 11, 15, 18, 19,
    "No One", 4, 2, 0, mexiBraziCentAmerHealth, 5, mexiBraziCentAmerHealth);
  brazil = new Province("Brazil", 10, 17, 19, 26,
    "No One", 5, 7, 0, mexiBraziCentAmerHealth, 7, mexiBraziCentAmerHealth);

  bolivia = new Province("Bolivia", 7, 10, 19, 22,
    "No One", 5, 3, 0, westSouSouAmerHealth, 13, westSouSouAmerHealth);
  peru = new Province("Peru", 8, 10, 22, 25,
    "No One", 10, 4, 0, westSouSouAmerHealth, 13, westSouSouAmerHealth);
  chile = new Province("Chile", 9, 10, 25, 35,
    "No One", 4, 3, 0, westSouSouAmerHealth, 13, westSouSouAmerHealth);
  laPlata = new Province("La Plata", 10, 12, 26, 33,
    "No One", 4, 5, 0, westSouSouAmerHealth, 7, westSouSouAmerHealth);
  uruguay = new Province("Uruguay", 12, 15, 26, 29,
    "No One", 2, 2, 0, westSouSouAmerHealth, 4, westSouSouAmerHealth);
  //Western Europe
  greatBritain = new Province("Great Britain", 20, 22, 5, 8,
    "Great Britain", 2, 2, 0, 500, 75, 500);
  france = new Province("France", 22, 25, 9, 11,
    "France", 2, 2, 0, 500, 75, 500);
  portugal = new Province("Portugal", 21, 22, 11, 13,
    "Portugal", 2, 2, 0, 500, 75, 500);
  spain = new Province("Spain", 22, 24, 11, 13,
    "Spain", 2, 2, 0, 500, 75, 500);
  //Rest of Europe
  restOfEurope = new Province("the Rest Of Europe", 25, 32, 8, 12,
    "Uncolonizable Men", 0, 0, 0, 10, 4, 10);
  italy = new Province("Italy", 27, 29, 12, 14,
    "Uncolonizable Men", 0, 0, 0, 10, 4, 10);
  scandinavia = new Province("Scandinavia", 25, 32, 2, 5,
    "Uncolonizable Men", 0, 0, 0, 10, 4, 10);
  //North Africa
  morocco = new Province("Morocco", 21, 23, 16, 22,
    "No One", 7, 1, 0, norAfricaHealth, 14, norAfricaHealth);
  algeria = new Province("Algeria", 23, 26, 15, 19,
    "No One", 6, 1, 0, norAfricaHealth, 10, norAfricaHealth);
  tunis = new Province("Tunis", 26, 29, 15, 19,
    "No One", 7, 0, 0, norAfricaHealth, 13, norAfricaHealth);
  egypt = new Province("Egypt", 29, 32, 16, 19,
    "No One", 10, 2, 0, norAfricaHealth, 17, norAfricaHealth);
  somalia = new Province("Somalia", 29, 32, 19, 24,
    "No One", 2, 6, 0, norAfricaHealth, 10, norAfricaHealth);
  //Middle Africa
  middleAfrica = new Province("Central Africa", 23, 29, 19, 23,
    "Uncolonizable Men", 0, 0, 0, 10, 4, 10);
  //South/Central Africa
  westCongo = new Province("West Congo", 24, 26, 23, 29,
    "No One", 2, 12, 0, centSouAfricaHealth, 20, centSouAfricaHealth);
  congo = new Province("Congo", 26, 29, 23, 29,
    "No One", 7, 5, 0, centSouAfricaHealth, 20, centSouAfricaHealth);
  mombasa = new Province("Mombasa", 29, 30, 24, 30,
    "No One", 0, 0, 0, centSouAfricaHealth, 4, centSouAfricaHealth);
  southAfrica = new Province("South Africa", 25, 29, 29, 32,
    "No One", 0, 0, 0, centSouAfricaHealth, 4, centSouAfricaHealth);
  madagascar = new Province("Madagascar", 32, 34, 26, 29,
    "No One", 0, 0, 0, centSouAfricaHealth, 4, centSouAfricaHealth);
  //Middle East and India
  sriLanka = new Province("Sri Lanka", 43, 44, 22, 24,
    "No One", 0, 0, 0, norCanAusCaribHealth, 4, norCanAusCaribHealth);
  iran = new Province("Iran", 32, 37, 13, 16,
    "No One", 0, 0, 0, indianArabianHealth, 4, indianArabianHealth);
  afganistan = new Province("Afganistan", 37, 42, 13, 16,
    "No One", 0, 0, 0, indianArabianHealth, 4, indianArabianHealth);
  pakistan = new Province("Pakistan", 36, 38, 16, 18,
    "No One", 0, 0, 0, indianArabianHealth, 4, indianArabianHealth);
  arabia = new Province("Arabia", 33, 36, 16, 21,
    "No One", 0, 0, 0, indianArabianHealth, 4, indianArabianHealth);
  india = new Province("India", 38, 42, 16, 22,
    "No One", 0, 0, 0, indianArabianHealth, 4, indianArabianHealth);

  //Russia and Japan
  russia = new Province("Russia", 32, 37, 3, 13,
    "Uncolonizable Men", 0, 0, 0, 10, 4, 10);
  japan = new Province("Japan", 53, 54, 15, 19,
    "Uncolonizable Men", 0, 0, 0, 10, 4, 10);
  northSiberia = new Province("Northern Siberia", 37, 54, 2, 7,
    "No One", 0, 0, 0, norCanAusCaribHealth, 4, norCanAusCaribHealth);
  southSiberia = new Province("Southern Siberia", 37, 53, 7, 13,
    "No One", 0, 0, 0, norCanAusCaribHealth, 4, norCanAusCaribHealth);
  //China and IndoChina
  mongolia = new Province("Mongolia", 42, 50, 13, 15,
    "No One", 0, 0, 0, regularChineseHealth, 4, regularChineseHealth);
  tibet = new Province("Tibet", 42, 46, 15, 18,
    "No One", 0, 0, 0, regularChineseHealth, 4, regularChineseHealth);
  centralChina = new Province("Central China", 46, 50, 15, 18,
    "No One", 0, 0, 0, regularChineseHealth, 4, regularChineseHealth);
  easternChina = new Province("Eastern China", 50, 51, 13, 19,
    "No One", 0, 0, 0, regularChineseHealth, 4, regularChineseHealth);
  southChina = new Province("South China", 42, 50, 18, 19,
    "No One", 0, 0, 0, regularChineseHealth, 4, regularChineseHealth);
  indoChina = new Province("IndoChina", 46, 49, 19, 23,
    "No One", 0, 0, 0, indoChineseHealth, 4, indoChineseHealth);
  //Oceania
  indonesia = new Province("Indonesia", 47, 53, 26, 27,
    "No One", 0, 0, 0, indoChineseHealth, 4, indoChineseHealth);
  australia = new Province("Australia", 47, 53, 31, 36,
    "No One", 0, 0, 0, norCanAusCaribHealth, 4, norCanAusCaribHealth);

}

function pushAllTheCountries() {
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
