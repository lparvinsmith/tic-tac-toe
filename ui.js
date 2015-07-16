//BASIC FUNCTIONALITY
'use strict';

//basic UI
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
  })
});

//AJAX
$(function(){
  'use strict';
  var gameWatcher;

  //  var sa = '//localhost:3000';
  var sa = 'http://ttt.wdibos.com';

  $('#register').on('click', function(e){
    $.ajax(sa + '/register', {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val(),
          password_confirmation: $('#password').val()
        }
      }),
      dataType: 'json',
      method: 'POST'
      //see api.jquery documentation online for meanings of all of these
    }).done(function(data,textStatus,jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('registration failed');
    })
  });
  $('#login').on('click', function(e){
    $.ajax(sa + '/login', {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $("#email").val(),
          password: $("#password").val()
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data){
      $("#token").val(data.token);
    }).fail(function(e){
      $('#result').val('login failed');
    });
  });
    $('#list').on('click', function(e){
    $.ajax(sa + '/games', {
      dataType: 'json',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + $("#token").val()
      }
    }).done(function(data){
      $("#result").val(JSON.stringify(data));
    }).fail(function(){
      $("#result").val('list failed');
    });
  });
  $('#show').on('click', function(e){
    $.ajax(sa + '/games/' + $('#id').val(), {
      //adds slash after game, plus value of id column
      dataType: 'json',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + $("#token").val()
      }
    }).done(function(data){
      $("#result").val(JSON.stringify(data));
    }).fail(function(){
      $("#result").val('list failed');
    });
  });
  $('#create').on('click', function(e) {
    $.ajax(sa + '/games', {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + $('#token').val()
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('create failed');
    });
  });
  $('#join').on('click', function(e) {
    //copies #create and adds ID on the end (like from create)
    $.ajax(sa + '/games/' + $('#id').val(), {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      //changes method to PATCH, instead of player_o null, they will be assigned.
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + $('#token').val()
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('join failed');
    });
  });
  $('#move').on('click', function(e) {
    //copies #join except for data sent
    $.ajax(sa + '/games/' + $('#id').val(), {
      contentType: 'application/json',
      processData: false,
      //adds game object containing cell object
      data: JSON.stringify({
        game: {
          cell: {
            //unary plus operator turns string to number
            index: +$('#index').val(),
            value: $('#value').val()
          }
        }
      }),
      dataType: 'json',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + $('#token').val()
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('move failed');
    });
  });

  $("#watch").on('click', function(){
    gameWatcher = resourceWatcher(sa + '/games/' + $('#id').val() + '/watch', {
      Authorization: 'Token token=' + $('#token').val()
    });
    gameWatcher.on('change', function(data){
      var parsedData = JSON.parse(data);
      //heroku routers report this as 503
      // if (data.timeout) {
      //   gameWatcher.close();
      //   return console.warn(data.timeout);
      // }
      var gameData = parsedData.game;
      var cell = gameData.cell;
      $('#index').val(cell.index);
      $('#value').val(cell.value);
    })
    gameWatcher.on('error', function(e){
      console.error('an error has occurred', e);
    })
  })
});
