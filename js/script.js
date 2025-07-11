// recupero dei pulsanti
const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');

// recupero risultato
const results = document.getElementById('results');

// numero random biglietto
const generateRandomTicketNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// evento "calcola" al click
calculate.addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const km = parseFloat(document.getElementById('kmRun').value);
  const age = document.getElementById('agePass').value;

  const basePrice = 0.21 * km;
  let finalPrice;

  if (age === '1') {
    finalPrice = basePrice * 0.8;
  } else if (age === '2') {
    finalPrice = basePrice * 0.6;
  } else {
    finalPrice = basePrice;
  }

  const ticketNumber = generateRandomTicketNumber(10000, 99999);

  results.innerText =
    `Nome: ${name}
Numero biglietto: ${ticketNumber}
Km percorsi: ${km}
Età passeggero: ${age}
Prezzo finale: € ${finalPrice.toFixed(2)}`;
});

// reset
reset.addEventListener('click', (e) => {
  e.preventDefault();
  results.innerText = "";
  document.getElementById('name').value = '';
  document.getElementById('kmRun').value = '';
  document.getElementById('agePass').value = '';
});