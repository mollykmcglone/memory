var Card = require('./../js/card.js').cardModule;

$(document).ready(function() {
  var jackDiamonds = new Card();
  var kingDiamonds = new Card();
  var queenHearts = new Card();
  var queenClubs = new Card();
  var kingHearts = new Card();
  var jackDiamonds2 = new Card();
  var kingDiamonds2 = new Card();
  var queenHearts2 = new Card();
  var queenClubs2 = new Card();
  var kingHearts2 = new Card();
  var cards = [jackDiamonds, kingDiamonds, queenHearts, queenClubs, kingHearts, jackDiamonds2, kingDiamonds2, queenHearts2, queenClubs2, kingHearts2];
  var Game = {};
  Game.counter = 0;

  $('#jack-diamonds').click(function() {
    $("#jack-diamonds-showing").toggle();
    $("#jack-diamonds-hidden").toggle();
    jackDiamonds.setStatus();
      if (jackDiamonds2.status === "checked") {
        $('#matchResults').text("You made a match! Nice job, keep playing.");
        Game.counter += 1;
      } else {
        $('#matchResults').text("");
      }
        if (Game.counter === 5) {
          $('#matchResults').text("You win!");
        }
  });

  $('#king-diamonds').click(function() {
    $("#king-diamonds-showing").toggle();
    $("#king-diamonds-hidden").toggle();
    kingDiamonds.setStatus();
    if (kingDiamonds2.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });

  $('#queen-hearts').click(function() {
    $("#queen-hearts-showing").toggle();
    $("#queen-hearts-hidden").toggle();
    queenHearts.setStatus();
    if (queenHearts2.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("Oops! Try again.");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });

  $('#queen-clubs').click(function() {
    $("#queen-clubs-showing").toggle();
    $("#queen-clubs-hidden").toggle();
    queenClubs.setStatus();
    if (queenClubs2.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("Oops! Try again.");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });

  $('#king-hearts').click(function() {
    $("#king-hearts-showing").toggle();
    $("#king-hearts-hidden").toggle();
    kingHearts.setStatus();
    if (kingHearts2.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("Oops! Try again.");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });

  $('#jack-diamonds2').click(function() {
    $("#jack-diamonds2-showing").toggle();
    $("#jack-diamonds2-hidden").toggle();
    jackDiamonds.setStatus();
    if (jackDiamonds.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("Oops! Try again.");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });

  $('#king-diamonds2').click(function() {
    $("#king-diamonds2-showing").toggle();
    $("#king-diamonds2-hidden").toggle();
    kingDiamonds2.setStatus();
    if (kingDiamonds.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("Oops! Try again.");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });

  $('#queen-hearts2').click(function() {
    $("#queen-hearts2-showing").toggle();
    $("#queen-hearts2-hidden").toggle();
    queenHearts2.setStatus();
    if (queenHearts.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("Oops! Try again.");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });

  $('#queen-clubs2').click(function() {
    $("#queen-clubs2-showing").toggle();
    $("#queen-clubs2-hidden").toggle();
    queenClubs2.setStatus();
    if (queenClubs.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("Oops! Try again.");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });

  $('#king-hearts2').click(function() {
    $("#king-hearts2-showing").toggle();
    $("#king-hearts2-hidden").toggle();
    kingHearts2.setStatus();
    if (kingHearts.status === "checked") {
      $('#matchResults').text("You made a match! Nice job, keep playing.");
      Game.counter += 1;
    } else {
      $('#matchResults').text("Oops! Try again.");
    }
      if (Game.counter === 5) {
        $('#matchResults').text("You win!");
      }
  });
});
