//BASIC FUNCTIONALITY
'use strict';
//(document).ready(function(){}) include Ajax later

//when player clicks square, corresponding key in object board is given value X or O
//if div1 is clicked by playerX, square1 takes value 'X'
//if div1 is clicked by playerO, square1 takes value 'O'
//once div1 is clicked and its value set, it cannot change value until clearBoard()

var player = 'O';

$(".box").click(function() {
  $(this).text(player);
  return player;
})

//store outcome in scoreboard
//need to activate for when keepScore() increases score of player?
  // $("#xWins").html(playerXScore);
  // $("#oWins").html(playerOScore);
  // $("#draws").html(draw);

//play again button --works but needs to toggle first player
$(".play-again").click(function() {
  $(".box").text("");
 //run selectFirstPlayer and use result to change h3
})


//reset button --works.
$(".reset").click(function() {
  $("#xWins").text(0);
  $("#oWins").text(0);
  $("#draws").text(0);
})

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

