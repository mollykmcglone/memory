// var Card = require('./../card.js').cardModule;

$(document).ready(function() {
  // var cardObject = new Card();
  $('#jack-diamonds').click(function() {
    $("#jack-diamonds-showing").toggle();
    $("#jack-diamonds-hidden").toggle();
  });
  $('#king-diamonds').click(function() {
    $("#king-diamonds-showing").toggle();
    $("#king-diamonds-hidden").toggle();
  });
  $('#queen-hearts').click(function() {
    $("#queen-hearts-showing").toggle();
    $("#queen-hearts-hidden").toggle();
  });
  $('#queen-clubs').click(function() {
    $("#queen-clubs-showing").toggle();
    $("#queen-clubs-hidden").toggle();
  });
  $('#king-hearts').click(function() {
    $("#king-hearts-showing").toggle();
    $("#king-hearts-hidden").toggle();
  });
  $('#jack-diamonds2').click(function() {
    $("#jack-diamonds2-showing").toggle();
    $("#jack-diamonds2-hidden").toggle();
  });
  $('#king-diamonds2').click(function() {
    $("#king-diamonds2-showing").toggle();
    $("#king-diamonds2-hidden").toggle();
  });
  $('#queen-hearts2').click(function() {
    $("#queen-hearts2-showing").toggle();
    $("#queen-hearts2-hidden").toggle();
  });
  $('#queen-clubs2').click(function() {
    $("#queen-clubs2-showing").toggle();
    $("#queen-clubs2-hidden").toggle();
  });
  $('#king-hearts2').click(function() {
    $("#king-hearts2-showing").toggle();
    $("#king-hearts2-hidden").toggle();
  });
});
