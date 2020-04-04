// ci sono 64 quadrati di cui 15 devono essere di colore rosso. Al click su uno di questi diventa rosso solo quello cliccato. Gli altri 49 quadrati sono verdi, se cliccati.

$(document).ready(function(){


var backSquare, numberSquare, greenScore = 0, redScore = 0, scoreContent;

$('#red-score').css({"color": "red"}); // coloro di rosso il punteggio red-score
$('#green-score').css({"color": "green"}); // coloro di verde il punteggio green-score

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

  // modifico il valore della variabile in modo che punti a tutti i quadrati perchè dopo il ciclo il valore che rimane in memoria è solo l'ultimo generato
  numberSquare = $('.square');

  // eseguo un ciclo for per aggiungere la class green a quei quadrati che non hanno la class red
  for (var j = 0; j < 64; j++) {
    if (!numberSquare.eq(j).hasClass('red')) {
      numberSquare.eq(j).addClass("green");
    }
  }


  // scateno l'evento click, quando si clicca su un quadrato con la class red si colorerà di rosso e aggiornerà il punteggio red-score, stessa cosa per i quadrati con la class green
  numberSquare.click(
    function() {

      // se il quadrato ha la class "cliccato ccreo un messaggio per l'utente che lo avvisa che non può cliccare lo stesso quadrato più volte
      if ($(this).hasClass('cliccato')) {
        $('.modal-container').html('<div class="modal">' + '<h1>' + 'Non puoi cliccare più volte sullo stesso quadrato' + '</h1>' + '</div>'); // messaggio per l'utente
        $('.modal').animate({ // animazione
          opacity: 1,
          top: 0,
        }, 800, 'linear',
        function () {
          $('h1').css({"color": "darkorange"});
        });

        // altrimenti  quelli che sono stati cliccati con la class red si coloreranno di rosso e  scomparirà il messaggio per l'utente
      } else if ($(this).hasClass('red')) {
        $(this).css({"background": "red"});
        redScore++; // il punteggio viene incrementato
        $('#red-score').text("Red Score: " + (redScore));
        $(this).addClass('cliccato'); // viene aggiunta la class cliccato in modo da non aumentare il punteggio se si riclicca sullo stesso quadrato
        $('.modal').animate({ // animazione
          opacity: 1,
          top: '-100px',
          rotate: '180deg'
        }, 600);

        // altrimenti  quelli che sono stati cliccati con la class green si coloreranno di verde e scomparirà il messaggio per l'utente
      } else if ($(this).hasClass('green')) {
        $(this).css({"background": "green"});
        greenScore++; // il punteggio viene incrementato
        $('#green-score').text("Green Score: " + (greenScore));
        $(this).addClass('cliccato'); // viene aggiunta la class cliccato in modo da non aumentare il punteggio se si riclicca sullo stesso quadrato
        $('.modal').animate({ // animazione
          opacity: 1,
          top: '-100px',
          rotate: '180deg'
        }, 600);
      }
  });



  // funzione per generare un numero random da 0 a 63
  function numberRandom () {
      return Math.floor(Math.random() * 64);

  }


});
