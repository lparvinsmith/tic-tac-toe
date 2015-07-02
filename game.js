'use strict;'


var board = { square1: null, square2: null, square3: null,
              square4: null, square5: null, square6: null,
              square7: null, square8: null, square9: null};

//alternate which player begins, starting with playerX
var selectFirstPlayer = function() {
  var firstPlayer;
  if (firstPlayer !==playerX) {
    firstPlayer = playerX;
  }
  else {
    firstPlayer = playerO;
  }
  return firstPlayer;
}

//when player clicks square, corresponding key in object board is given value X or O

//determines when a game is over and if there is a winner or a tie
//FIX for when values are not defined and for how to figure out if X or O
var threeInARow = function() {
  var winner;
  if (board.square1 === board.square2 && board.square1 === board.square3 ||
      board.square1 === board.square5 && board.square1 === board.square9 ||
      board.square1 === board.square4 && board.square1 === board.square7 ||
      board.square2 === board.square5 && board.square2 === board.square8 ||
      board.square3 === board.square5 && board.square3 === board.square7 ||
      board.square3 === board.square6 && board.square3 === board.square9 ||
      board.square4 === board.square5 && board.square4 === board.square6 ||
      board.square7 === board.square8 && board.square7 === board.square9) {
    //if common value is X, winner is playerX. if value is O, winner is playerO
    console.log('there is a winner!');
    return winner;
  }
  for (value in board) { //how do I check if values are all truthy, or none are null?
    if (board.value) { //need to apply to all values in object board
    winner = "draw";
    return winner;
    }
  }
}

//stores outcome in scoreboard
var keepScore = function() {
  var playerXScore;
  var playerOScore;
  var draw;
  if (winner === playerX) {
    playerXScore++;
  }
  else if (winner === playerO) {
    playerOScore++;
  }
  else {
    draw++;
  }
}

//if button play again is pressed, clears board
var clearBoard = function() {
  for (value in board) { //like in threeInARow function, how do i touch all values only?
    value = null;
  }
}
