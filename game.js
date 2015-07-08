'use strict';

var board = ["x", "o", "x",
             "x", "o", "o",
             "o", "o", "x",];

var threeInARow = function(player) {
  var winner;
  //if three squares in a row are equal to player, that player wins
  if (board[0] === player &&
      board[1] === player &&
      board[2] === player) {
    winner = player;
  }
  else if (board[0] === player &&
           board[4] === player &&
           board[8] === player) {
    winner = player;
  }
  else if (board[0] === player &&
           board[3] === player &&
           board[6] === player) {
    winner = player;
  }
  else if (board[1] === player &&
           board[4] === player &&
           board[7] === player) {
    winner = player;
  }
  else if (board[2] === player &&
           board[4] === player &&
           board[6] === player) {
    winner = player;
  }
  else if (board[2] === player &&
           board[5] === player &&
           board[8] === player) {
    winner = player;
  }
  else if (board[3] === player &&
           board[4] === player &&
           board[5] === player) {
    winner = player;
  }
  else if (board[6] === player &&
           board[7] === player &&
           board[8] === player) {
    winner = player;
  }
//if all values in board are truthy, winner = 'draw';
  else if (board[0] &&
           board[1] &&
           board[2] &&
           board[3] &&
           board[4] &&
           board[5] &&
           board[6] &&
           board[7] &&
           board[8]) {
    winner = 'draw';
  }
  console.log('the winner is player ' + winner);
  return winner;
}

threeInARow('o');

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
  for (var i = 0; i < board.length; i++) { //should touch all values
    board[i] = "";
  }
}

// clearBoard();
// console.log(board);

// module.export {
//   playerXScore;
//   playerOScore;
//   clearBoard;
// }


