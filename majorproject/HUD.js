// Changes colour based on who is playing and displays the amount of gold, resources, and other things
function headsUpDisplay(playerCountry) {
  if (playerCountries[playerTurn].o === "Great Britain") {
    fill("red");
    rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);

  }
  else if (playerCountries[playerTurn].o === "France") {
    fill("blue");
    rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);

  }
  else if (playerCountries[playerTurn].o === "Portugal") {
    fill("green");
    rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);

  }
  else if (playerCountries[playerTurn].o === "Spain") {
    fill("yellow");
    rect(0, windowHeight - 3 * blockHeight, windowWidth, windowHeight);

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
  rect(windowWidth - (8 * blockWidth), windowHeight - 3 * blockHeight,4 * blockWidth, 3*blockHeight);
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
  rect(0,0,windowWidth,windowHeight);
}
