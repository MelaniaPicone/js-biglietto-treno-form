
// recupero dei pulsanti
const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');

//recupero risultato
const results = document.getElementById('results');

// numero random biglietto
const generateRandomTicketNumber = (min,max) => {
return Math.floor(Math.random() * (max - min +1)) +min;
}

// evento "calcola" al click