'use strict';

var board = ["", "", "",
             "", "", "",
             "", "", "",];

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
  return winner;
}

var isThereADraw = function(){
  var winner;
  //if all values in board are truthy, winner = 'draw';
  if (board[0] &&
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
  return winner;
}

//stores outcome in scoreboard
var playerXScore = 0;
var playerOScore = 0;
var draw = 0;
var keepScore = function(winner) {
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

//alternate which player begins, starting with 'X'
var firstPlayer;
var selectFirstPlayer = function() {
  if (firstPlayer === 'X') {
    firstPlayer = 'O';
  }
  else {
    firstPlayer = 'X';
  }
  console.log(firstPlayer + ' begins');
  return firstPlayer;
}

var currentPlayer = selectFirstPlayer();
var switchPlayer = function() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  }
  else {
    currentPlayer = 'X';
  }
  console.log('currentPlayer is ' + currentPlayer);
  return currentPlayer;
}

//if button 'play again' is pressed, clears board
var clearBoard = function() {
  for (var i = 0; i < board.length; i++) { //should touch all values
    board[i] = "";
  }
}



