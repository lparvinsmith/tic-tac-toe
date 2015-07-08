'use strict';

var board = { square1: 'X', square2: null, square3: null,
              square4: null, square5: "X", square6: null,
              square7: null, square8: null, square9: "X"};

var threeInARow = function(player) {
  var winner;
  //if three squares in a row are equal to player, that player wins
  if (board.square1 === player &&
      board.square2 === player &&
      board.square3 === player) {
    winner = player;
  }
  if (board.square1 === player &&
      board.square5 === player &&
      board.square9 === player) {
    winner = player;
  }
  if (board.square1 === player &&
      board.square4 === player &&
      board.square7 === player) {
    winner = player;
  }
   if (board.square2 === player &&
       board.square5 === player &&
       board.square8 === player) {
    winner = player;
  }
   if (board.square3 === player &&
       board.square5 === player &&
       board.square7 === player) {
    winner = player;
  }
   if (board.square3 === player &&
       board.square6 === player &&
       board.square9 === player) {
    winner = player;
  }
   if (board.square4 === player &&
       board.square5 === player &&
       board.square6 === player) {
    winner = player;
  }
   if (board.square7 === player &&
       board.square8 === player &&
       board.square9 === player) {
    winner = player;
  }
//if all values in board are truthy, winner = 'draw';
//this was working before i thought?? FIX ME
  for (var key in board) {
    var value = board[key];
    if (value !== null) {
      winner = "draw";
    }
  }
  console.log('the winner is player ' + winner);
  return winner;
}

threeInARow('X');

var takeTurn = function(player) {
  //use ui.js to listen for click from player --HOW
  //check if there are threeInARow
}

//need separate function for determining player order/switching?
var switchTurns = function(player) {

}

//FIX THIS alternate which player begins, starting with playerX
var selectFirstPlayer = function() {
  var firstPlayer;
  if (firstPlayer !== playerX || firstPlayer === undefined) {
    firstPlayer = playerX;
  }
  else {
    firstPlayer = playerO;
  }
  console.log(firstPlayer + ' begins');
  return firstPlayer;
}

// selectFirstPlayer();

//stores outcome in scoreboard
var keepScore = function() {
  var playerXScore = 0;
  var playerOScore = 0;
  var draw = 0;
  if (winner === 'X') {
    playerXScore++;
  }
  else if (winner === 'O') {
    playerOScore++;
  }
  else {
    draw++;
  }
}

//if button 'play again' is pressed, clears board
var clearBoard = function() {
  for (key in board) { //should touch all values
    board[key] = null;
  }
}

//woo it works!
// clearBoard();
// console.log(board);

// module.export {
//   playerXScore;
//   playerOScore;
//   clearBoard;
// }


