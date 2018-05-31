// Changes colour based on who is playing and displays the amount of gold, resources, and other things
function headsUpDisplay(playerCountry) {
  if (playerCountries[playerTurn].o === "Great Britain") {
    fill("red");
    rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
    //Displaying gold and resources
    rectMode(CORNERS);
    fill(255);
    textSize(20);
    text("resources: " + playerCountries[playerTurn].r ,0,windowHeight - blockHeight * 3,blockWidth * 4 , windowHeight);
    text("Gold: " + playerCountries[playerTurn].g ,blockWidth * 4,windowHeight - blockHeight * 3,blockWidth * 8 , windowHeight);
    rectMode(CORNER);

  } else if (playerCountries[playerTurn].o === "France") {
    fill("blue");
    rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
    //Displaying gold and resources
    rectMode(CORNERS);
    fill(255);
    textSize(20);
    text("resources: " + playerCountries[playerTurn].r ,0,windowHeight - blockHeight * 3,blockWidth * 4 , windowHeight);
    text("Gold: " + playerCountries[playerTurn].g ,blockWidth * 4,windowHeight - blockHeight * 3,blockWidth * 8 , windowHeight);
    rectMode(CORNER);

  } else if (playerCountries[playerTurn].o === "Portugal") {
    fill(58, 190, 58);
    rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
    //Displaying gold and resources
    rectMode(CORNERS);
    fill(255, 255, 0);
    textSize(20);
    text("resources: " + playerCountries[playerTurn].r ,0,windowHeight - blockHeight * 3,blockWidth * 4 , windowHeight);
    text("Gold: " + playerCountries[playerTurn].g ,blockWidth * 4,windowHeight - blockHeight * 3,blockWidth * 8 , windowHeight);
    rectMode(CORNER);

  } else if (playerCountries[playerTurn].o === "Spain") {
    fill("yellow");
    rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
    //Displaying gold and resources
    rectMode(CORNERS);
    fill(198, 11, 30);
    textSize(20);
    text("resources: " + playerCountries[playerTurn].r ,0,windowHeight - blockHeight * 3,blockWidth * 4 , windowHeight);
    text("Gold: " + playerCountries[playerTurn].g ,blockWidth * 4,windowHeight - blockHeight * 3,blockWidth * 8 , windowHeight);
    rectMode(CORNER);
  }



  //END TURN BUTTON
  fill(255);
  rect(windowWidth - 4 * blockWidth, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
  fill(0);
  textSize(20);
  text("End Turn", windowWidth - 4 * blockWidth, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
  //text label = gold, then resources, then player country

  //SHOP BUTTON
  fill(255);
  rect(windowWidth - (8 * blockWidth), windowHeight - 3 * blockHeight, 4 * blockWidth, 3 * blockHeight);
  fill(0);
  textSize(20);
  text("Shop", windowWidth - 8 * blockWidth, windowHeight - 3 * blockHeight, windowWidth - 4 * blockWidth, windowHeight);

}

//This information is indirectly shown to the player through the HUD. THE ONLY THING THIS IS USED FOR IS THE HUD
class PlayerHUDInfo {
  constuctor(ownedBy, gold, resources) {
    this.o = ownedBy;
    this.g = gold;
    this.r = resources;
  }
}





//This is a menu where countries can buy units

function shopMenu() {
  fill(0, 200, 144);
  rect(0, 0, width, height);
  fill(255, 0, 0);
  rect(windowWidth - 3 * blockWidth, 0, 3 * blockWidth, 3 * blockHeight);
  fill(255);
  rect(blockWidth * 5, blockHeight * 5, windowWidth - (10* blockWidth), windowHeight - (10* blockHeight));
  rectMode(CORNERS);
  fill(0);
  textSize(20);
  text("press 'U' to Buy a unit of basic infantry unit please and thank you, it will cost 10 gold and 10 resources",blockWidth * 6, blockHeight * 6, blockWidth * 11, blockHeight * 11);
  rectMode(CORNER);

}
