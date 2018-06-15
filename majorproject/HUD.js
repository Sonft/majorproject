// Changes colour based on who is playing and displays the amount of gold, resources, and other things
function headsUpDisplay(playerCountry) {
  stroke(0);



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
  if (playerCountries[playerTurn].u.length>0){
    for (let x = 0; x< playerCountries[playerTurn].u.length;x++){
      if (playerCountries[playerTurn].u[x].m > 0){
        fill("red");
        rect(windowWidth - 4 * blockWidth, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
        fill(255);
        textSize(20);
        text("End Turn", windowWidth - 4 * blockWidth, windowHeight - 3 * blockHeight, windowWidth, windowHeight);

      }
      else{
        fill(58, 190, 58);
        rect(windowWidth - 4 * blockWidth, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
        fill(255);
        textSize(20);
        text("End Turn", windowWidth - 4 * blockWidth, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
      }
    }
  }
  else{
    fill(58, 190, 58);
    rect(windowWidth - 4 * blockWidth, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
    fill(255);
    textSize(20);
    text("End Turn", windowWidth - 4 * blockWidth, windowHeight - 3 * blockHeight, windowWidth, windowHeight);
  }

  //text label = gold, then resources, then player country

  //SHOP BUTTON
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth - 7 * blockWidth, windowHeight - 3 * blockHeight, windowWidth - 4 * blockWidth, windowHeight);
  rectMode(CORNER);
  textSize(windowWidth/100);
  fill(0);
  text("shop", windowWidth - 7 * blockWidth, windowHeight - 3 * blockHeight, windowWidth - 4 * blockWidth, windowHeight);

  if (playerTurn === 1){
    fill(255);
  }
  else{
    fill(0);
  }
  if (showUnitMap === true){
    textSize(windowWidth/100);
    text("unit map, press m to change", windowWidth - 12 * blockWidth, windowHeight - 3 * blockHeight, 5 * blockWidth, blockHeight * 3);

  }
  if (showUnitMap === false){
    textSize(windowWidth/100);
    text("province map, press m to change", windowWidth - 12 * blockWidth, windowHeight - 3 * blockHeight, 5 * blockWidth, blockHeight * 3);

  }

  textSize(windowWidth/110);
  text( "press W to go up, A to go left, S to go down, and D to go right. click on units to move them! Press B to bombard provinces, move into enemy units to attack them, and click on the shop to buy new units. Be careful! you take attrition out of friendly land.",windowWidth - 35 * blockWidth, windowHeight - 3 * blockHeight, 18 * blockWidth, blockHeight * 3);
  noStroke();
}

//This information is indirectly shown to the player through the HUD. THE ONLY THING THIS IS USED FOR IS THE HUD
//USELESS CODE
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
