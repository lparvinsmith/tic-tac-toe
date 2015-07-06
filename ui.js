//when player clicks square, corresponding key in object board is given value X or O
//if div1 is clicked by playerX, square1 takes value 'X'
//if div1 is clicked by playerO, square1 takes value 'O'
//once div1 is clicked and its value set, it cannot change value until clearBoard()

//store outcome in scoreboard
//need to activate for when keepScore() increases score of player?
  $("#xWins").html(playerXScore);
  $("#oWins").html(playerOScore);
  $("#draws").html(draw);

//play again button
$(".play-again").click(function() {
  clearBoard();
  selectFirstPlayer();
})
//need to ensure these are properly linked

//play again button -- new colors
$(".play-again").click(function() {
  // assign each color value a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  // generate RGBA value from variables
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';

  //change body's background to randomRGBA
  $(".playerX").css("color", randomRGBA);
} //do again for .playerO and for $(.box).css("border", "solid " + randomRGBA + " 2px");

//reset button
$(".reset").click(function() {
  $("#xWins").html(0);
  $("#oWins").html(0);
  $("#draws").html(0);
})
