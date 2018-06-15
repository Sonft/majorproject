let year = 1700;
let endTurn = false;



//PLAYER TURN FUNCTION//INCOMPLETE
function playerTurnFunc(playerTurn){
  if (playerCountries[playerTurn].att === false){
    for (let x =0; x<masterListOfCountry.length;x++){
      if (playerCountries[playerTurn].o === masterListOfCountry[x].ownedBy){
        playerCountries[playerTurn].r += masterListOfCountry[x].r;
        playerCountries[playerTurn].g += masterListOfCountry[x].g;
        playerCountries[playerTurn].att = true;
      }
    }
  }
}




//IM GONNA FIX THE PROBLEMS with clicking and it repeating the function for as long as you clicked it
function mouseClicked(){
  //Buttons
  if (mouseX > windowWidth - 4*blockWidth && mouseY >  windowHeight - 3*blockHeight && endTurn === false&& isShopOpen === false) {
    endTurn = true;
    playerCountries[playerTurn].att = false;
  }
  if( mouseX > windowWidth - (7 * blockWidth)&& mouseY > windowHeight - 3 * blockHeight&& mouseX< windowWidth - (4 * blockWidth)&&  mouseY <windowHeight && isShopOpen === false){
    isShopOpen = true;

  }
  if(mouseX > windowWidth - (3* blockWidth) && mouseY>0 && mouseX < windowWidth && mouseY < (3*blockHeight) && isShopOpen === true){
    isShopOpen = false;
  }


//Selecting units
  if (endTurn === false && isShopOpen === false && playerTurn === 0){
    for(let x = 0; x < unitsOfGreatBritain.length; x++){
      unitsOfGreatBritain[x].selectThisUnit();
    }
  }
  if (endTurn === false && isShopOpen === false && playerTurn === 1){
    for(let x = 0; x < unitsOfFrance.length; x++){
      unitsOfFrance[x].selectThisUnit();
    }
  }
  if (endTurn === false && isShopOpen === false && playerTurn === 2){
    for(let x = 0; x < unitsOfSpain.length; x++){
      unitsOfSpain[x].selectThisUnit();
    }
  }
  if (endTurn === false && isShopOpen === false && playerTurn === 3){
    for(let x = 0; x < unitsOfPortugal.length; x++){
      unitsOfPortugal[x].selectThisUnit();
    }
  }
}
