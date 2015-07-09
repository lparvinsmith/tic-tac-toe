//BASIC FUNCTIONALITY
'use strict';

$(document).ready(function(){

  selectFirstPlayer();

  //store outcome in scoreboard
  var recordScore = function(){
    $("#xWins").text(playerXScore);
    $("#oWins").text(playerOScore);
    $("#draws").text(draw);
  }

  //when player clicks square, corresponding key in object board is given value X or O
  //once square is clicked and its value set, it cannot change value until clearBoard()
  var takeTurn = function() {
      // $(".box").click(function() {
    //if this box's text is not truthy
    if (!$(this).text()) {
      //this box's text becomes player
      $(this).text(currentPlayer);
      //the corresponding array's text becomes player
      var boxId = Number($(this).attr('id'));
      board[boxId] = currentPlayer;
      // return player;
    }
      // })
    //check if there are threeInARow or draw
    //if the game is over, plug winner into keepScore
    var winner = threeInARow(currentPlayer);
    if (winner) {
      keepScore(winner);
      recordScore();
      console.log('YOU WIN!');
      return winner;
    } else if (isThereADraw()) {
      keepScore(winner);
      recordScore();
      console.log('DRAW!');
      return winner;
    } else {
      // debugger;
      switchPlayer();
    }
  }

  $(".box").click(takeTurn);

  //play again button
  //WORKS
  $(".play-again").click(function() {
    //clears board on browser
    $(".box").text("");
    //clears board array
    clearBoard();
    //toggles first player
    selectFirstPlayer();
  })

  //reset button
  $(".reset").click(function() {
    $("#xWins").text(0);
    $("#oWins").text(0);
    $("#draws").text(0);
  })
});

/////////////////////////////////////////////
//FUN STUFF

//COLORS
//play again button -- new colors
// $(".play-again").click(function() {
//   // assign each color value a random number 0-255
//   var red = Math.floor(Math.random() * 255);
//   var green = Math.floor(Math.random() * 255);
//   var blue = Math.floor(Math.random() * 255);

//   // generate RGBA value from variables
//   var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';

//   //change body's background to randomRGBA
//   $(".playerX").css("color", randomRGBA);
// )}
//do again for .playerO and for $(.box).css("border", "solid " + randomRGBA + " 2px");

//IF WIN 3

//IF WIN 5

//IF WIN 7 RULE CHANGE?

