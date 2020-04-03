// ci sono 64 quadrati di cui 15 devono essere di colore rosso. Al click su uno di questi diventa rosso solo quello cliccato. Gli altri 49 quadrati sono verdi, se cliccati.

$(document).ready(function(){


var backSquare;


  //  ciclo per stampare nell'html 64 div che rappresentano i quadrati
  for (var i = 1; i <= 64; i++) {
    backSquare = $('.container').html();
    console.log(backSquare);
    $('.container').html(backSquare + "<div class='square'>" + "</div>");
  }










});
