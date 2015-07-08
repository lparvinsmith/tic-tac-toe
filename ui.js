//BASIC FUNCTIONALITY
'use strict';

var player = 'O';

$(document).ready(function(){

  //when player clicks square, corresponding key in object board is given value X or O
  //once square is clicked and its value set, it cannot change value until clearBoard()
  // var makeMove = function() {
    $(".box").click(function() {
      //if this box's text is not truthy
      if (!$(this).text()) {
        //this box's text becomes player
        $(this).text(player);
        //the corresponding array's text becomes player
        var boxId = $(this).attr('id');
        board[boxId] = player;
        return player;
      }
    })


  //when player clicks .box0, board[0] is updated as player
  // var updateBoard = function(player){
  //   if ( $("#box0").click(function() {
  //     board[0] = player;
  //   }))
  // }

  //store outcome in scoreboard
  //need to activate for when keepScore() increases score of player?
  $("#xWins").text(playerXScore);
  $("#oWins").text(playerOScore);
  $("#draws").text(draw);

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

