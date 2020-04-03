// ci sono 64 quadrati di cui 15 devono essere di colore rosso. Al click su uno di questi diventa rosso solo quello cliccato. Gli altri 49 quadrati sono verdi, se cliccati.

$(document).ready(function(){


var backSquare, numberSquare;


  //  ciclo per stampare nell'html 64 div che rappresentano i quadrati
  for (var i = 1; i <= 64; i++) {
    backSquare = $('.container').html();
    $('.container').html(backSquare + "<div class='square'>" + "</div>");
  }

  // assegno la classe red agli elementi
  var number = 0;
  while (number < 15)  { // esegui il ciclio finchè non ci sono 15 numeri tutti diversi, cioè finchè la variabile di controllo è minore di 15
    numberSquare = $('.square').eq(numberRandom()); // seleziona l'elemento square all'interno dell'array

    if (!numberSquare.hasClass('red')) { // se l'elemento selezionato non ha la class red
      numberSquare.addClass("red"); // allora aggiungila
      number++; // e incrementa la variabile di controllo di 1 e riesegui il ciclo
    }

  }
  console.log(numberSquare.eq());

  numberSquare = $('.square');

  for (var j = 0; j < 64; j++) {
    if (!numberSquare.eq(j).hasClass('red')) {
      numberSquare.eq(j).addClass("green");
    }
  }

  // modifico il valore della variabile in modo che punti a tutti i quadrati perchè dopo il ciclo il valore che rimane in memoria è solo l'ultimo generato

  console.log(numberSquare);



  numberSquare.click(
    function() {
      if ($(this).hasClass('red')) {
        $(this).css({"background": "red"});
      } else if ($(this).hasClass('green')) {
        $(this).css({"background": "green"});
      }
  });



  // funzione per generare un numero random da 0 a 63
  function numberRandom () {
      return Math.floor(Math.random() * 64);

  }







});
