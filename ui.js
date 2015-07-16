//BASIC FUNCTIONALITY
'use strict';

$(document).ready(function(){

//sets header three to tell players whose turn it is to go first
  var tellFirstPlayer = function(){
    $("h3").text("Player " + currentPlayer + " goes first.");
  }

  selectFirstPlayer();
  tellFirstPlayer();

  //store outcome in scoreboard
  var recordScore = function(){
    $("#xWins").text(playerXScore);
    $("#oWins").text(playerOScore);
    $("#draws").text(draw);
  }

  //when player clicks square, corresponding key in object board is given value X or O
  //once square is clicked and its value set, it cannot change value until clearBoard()
  var takeTurn = function() {
    //if this box's text is not truthy and someone hasn't won
    if (!$(this).text()) {
      //this box's text becomes player
      $(this).text(currentPlayer);
      //the corresponding array's text becomes player
      var boxId = Number($(this).attr('id'));
      board[boxId] = currentPlayer;
    }
    //check if there are threeInARow or draw
    //if the game is over, plug winner into keepScore
    var winner = threeInARow(currentPlayer);
    if (winner) {
      keepScore(winner);
      recordScore();
      console.log('YOU WIN!');
      $("h3").text("PLAYER " + winner + " WINS!");
      return winner;
    } else if (isThereADraw()) {
      keepScore(winner);
      recordScore();
      console.log('DRAW!');
      $("h3").text("DRAW!");
      return winner;
    } else {
      // debugger;
      switchPlayer();
    }
  }

  //when box is clicked, run function takeTurn if there isn't already a winner
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
    tellFirstPlayer();
  })

  //reset button
  $(".reset").click(function() {
    $("#xWins").text(0);
    $("#oWins").text(0);
    $("#draws").text(0);
    playerXScore = 0;
    playerOScore = 0;
    draw = 0;
  })
});

/////////////////////////////////////////////
//FUN STUFF

//IF WIN 3

//IF WIN 5

//IF WIN 7 RULE CHANGE?

