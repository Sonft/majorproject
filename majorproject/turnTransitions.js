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
  if (mouseX > windowWidth - 50 && mouseY > windowHeight - 50 && endTurn === false) {
    endTurn = true;
    playerCountries[playerTurn].att = false;
  }
  let clickableThings = [];


}
