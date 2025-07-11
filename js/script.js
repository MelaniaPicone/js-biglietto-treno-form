
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

calculate.addEventListener('click', (e) => {
    e.preventDefault();


const nameValue = document.getElementById('name').value;
const kmRun = document.getElementById('km').value;
const agePass = document.getElementById ('age').value;
}


// calcolo prezzo

const basePrice = 0.21 * kmRun;
let finalPrice;

if (agePass < '1') {
  finalPrice = basePrice * 0.8;
}

else if (agePass === '2') {
  finalPrice = basePrice *0.6;
}
else {
  finalPrice = baseprice;
}

const ticketNumber = generateRandomTicketNumber(1000,99999);

results.innerText = `Nome: ${nameValue}
Numero biglietto: ${ticketNumber}
Km percorsi: ${kmRun}
Età passeggero: ${agePass}
Prezzo finale: € ${finalPrice.toFixed(2)}`;


