$(document).ready(function(){

var indexnum = prompt("How many integers long do you want the ping-pong test to be?");

    for (var x = 1; x <= indexnum; x++) {
      if (x % 15 === 0) {
        $('#pingpong').append('<li>'+"ping-pong"+'</li>');}
      else if (x % 5 === 0) {
        $('#pingpong').append('<li>'+"pong"+'</li>');}
      else if (x % 3 === 0) {
        $('#pingpong').append('<li>'+"ping"+'</li>');}
      else{
        $('#pingpong').append('<li>'+x+'</li>');};
    };


  });
