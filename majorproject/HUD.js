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
  fill(255);
  rect(windowWidth - 50, windowHeight - 50, windowWidth, windowHeight);
  //text label = gold, then resources, then player country
}

//This information is indirectly shown to the player through the HUD. THE ONLY THING THIS IS USED FOR IS THE HUD
class PlayerHUDInfo {
  constuctor(ownedBy, gold, resources) {
    this.o = ownedBy;
    this.g = gold;
    this.r = resources;
  }
}
