//Makes every land mass
function makeEarthMap() {
  //Canadian Cores
  alaska.display();
  britishColumbia.display();
  yukon.display();
  northWest.display();
  GoSL.display();
  quebec.display();
  //America
  cascadian.display();
  louisiana.display();
  eastAmerica.display();
  florida.display();
  //Central America
  mexico.display();
  centAmeri.display();
  panama.display();
  cuba.display();
  //South America
  venezuela.display();
  guinea.display();
  bolivia.display();
  brazil.display();
  peru.display();
  chile.display();
  laPlata.display();
  uruguay.display();
  //Europe
  greatBritain.display();
  france.display();
  portugal.display();
  spain.display();
  //Rest of Europe
  restOfEurope.display();
  italy.display();
  scandinavia.display();
  //North Africa
  morocco.display();
  algeria.display();
  tunis.display();
  egypt.display();
  //Middle Africa
  middleAfrica.display();
  //South/Central Africa
  westCongo.display();
  congo.display();
  somalia.display();
  mombasa.display();
  southAfrica.display();
  madagascar.display();
  //Middle East and India
  iran.display();
  afganistan.display();
  pakistan.display();
  arabia.display();
  india.display();
  sriLanka.display();
  //Russia and Japan
  russia.display();
  japan.display();
  northSiberia.display();
  southSiberia.display();
  //China and Indochina
  mongolia.display();
  tibet.display();
  centralChina.display();
  easternChina.display();
  southChina.display();
  indoChina.display();
  //Oceania
  indonesia.display();
  australia.display();
}


// this whole thing is the class called province. It functions to make it easier to make countries for the game when starting up the game
class Province {
  constructor(name, xStart, xFin, yStart, yFin, ownedBy, gold, resources, isClicked, maxHealth, strength,health) {
    this.n = name;//this represents the name
    this.x = xStart;//first x value
    this.x1 = xFin; // last x value
    this.y = yStart; // first y value
    this.y1 = yFin;// last y value
    this.ownedBy = ownedBy; // who owns this fine piece of land right here
    this.g = gold; // the gold and resources
    this.r = resources;
    this.c = isClicked;// and finally if the country is being clicked
    this.h = health;
    this.s = strength;
    this.mH = maxHealth;


  }

  //Our map is a 2d array, so what display does is depending on who owns a province sets the province owner ID to that country, thus changing the colour
  display (x, y, x1, y1, o) {
    for(let x = this.x; x < this.x1; x++) {
      for(let y = this.y; y < this.y1; y++) {
        if (countryMousedOver(this.x, this.y, this.x1, this.y1) === true) {
          map[x][y] = 1;
        }
        else if (this.ownedBy === "No One") {
          map[x][y] = 6;
        }
        else if (this.ownedBy === "Portugal") {
          map[x][y] = 5;
        }
        else if (this.ownedBy === "France") {
          map[x][y] = 4;
        }
        else if (this.ownedBy === "Spain") {
          map[x][y] = 3;
        }
        else if (this.ownedBy === "Great Britain") {
          map[x][y] = 2;
        }
        else if (this.ownedBy === "Uncolonizable Men") {
          map[x][y] = 7;
        }
        //if this is true, a pop up of the countries info appears
        if (clickOnCountry(this.x, this.y, this.x1, this.y1) === true) {
          this.c = 1;
        }
        //this turns off the popup
        isClicked(this.x, this.y, this.x1, this.y1, this.n, this.g, this.r, this.c, this.ownedBy, this.h,this.mH);
        if (keyIsPressed && (key === "c"|| key === "C") || isShopOpen === true || showUnitMap === true) {
          this.c = 0;

        }
      }
    }
  }
}
