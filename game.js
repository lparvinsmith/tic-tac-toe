'use strict;'


var board = { square1: 'X', square2: 'O', square3: "O",
              square4: 'O', square5: 'X', square6: 'X',
              square7: 'X', square8: "O", square9: 'X'};

//FIX THIS alternate which player begins, starting with playerX
var selectFirstPlayer = function() {
  var playerX;
  var playerO;
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

//when player clicks square, corresponding key in object board is given value X or O
//if div1 is clicked by playerX, square1 takes value 'X'
//if div1 is clicked by playerO, square1 takes value 'O'
//once div1 is clicked and its value set, it cannot change value until clearBoard()

//determines when a game is over and if there is a winner or a tie
//FIX for when values are not defined and for how to figure out if X or O
//TRY with function(player) { if square1 === player && square2 === player && square3 === player}
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
  //if all values in board are truthy, winner = 'draw';
  for (key in board) {
    var value = board[key];
    if (value !== null) {
      winner = "draw";
      return winner;
    }
  }
}

console.log(threeInARow());

//stores outcome in scoreboard
var keepScore = function() {
  var playerXScore = 0;
  var playerOScore = 0;
  var draw = 0;
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

//if button 'play again' is pressed, clears board
var clearBoard = function() {
  for (key in board) { //should touch all values
    board[key] = null;
  }
}

//woo it works!
// clearBoard();
// console.log(board);
