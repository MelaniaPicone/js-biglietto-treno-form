// richiesta all'utente
const distanceNum = ('Inserisci qui la distanza che vuoi percorrere');
const yearsNum =('Inserisci qui la tua età');
console.log(distanceNum);
console.log(yearsNum);

// prezzo del biglietto
const ticket = 0.21;
const ticketTot = ticket * distanceNum;
console.log(ticketTot);

// applicazione dello sconto
const minNum = 18;
const overNum = 65;
console.log(minNum);
console.log(overNum);

const ticketDiscountMin = 20;
const ticketDiscountOver = 40;
const rate = 100;
console.log(ticketDiscountMin);
console.log(ticketDiscountOver);


if(yearsNum < minNum) {
console.log("viene applicato uno sconto del 20% sul biglietto")
const ticketMin = (ticketTot / rate) * ticketDiscountMin;
const ticketPrice = ticketTot - ticketMin;
console.log(ticketPrice);
}

else if(yearsNum >= overNum){
  console.log ("viene applicato uno sconto del 40% sul biglietto")
  const ticketOv = (ticketTot / rate) * ticketDiscountOver;
  const ticketOvPrice = ticketTot - ticketOv;
  console.log(ticketOvPrice);
}

else {
console.log("il biglietto non è soggetto ad alcuno sconto")
console.log(ticketTot.toFixed(2))
}