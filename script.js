//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//il prezzo del biglietto è definito in base ai km (0.21 € al km),
const priceTiketForKm = 0.21;
//va applicato uno sconto del 20% per i minorenni,
const discountYoung = 0.8;
//va applicato uno sconto del 40% per gli over 65.,
const discountOlder = 0.6;
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.,

const distance = parseInt(prompt("Inserisci i KM da percorrere"));
const age = parseInt(prompt("Inserisci la tua età"));

console.log(`L'utente vuole percorrere ${distance} km e dice di avere ${age} anni`)

if (isNaN (distance) && isNaN (age)) { 
 console.log("I valori inseriti non sono validi");
}

 else { 
    console.log( "I valori inseiriti sono validi!")
};

let result;

if (age < 18) {result = priceTiketForKm * distance * discountYoung}
else if (age > 65) {result = priceTiketForKm * distance * discountOlder}

console.log(`Prezzo totale del biglietto = ${result} euro`);

// TIP:
//per controllare che la vostra logica sui prezzi funzioni corretta14
// mente, provate a verificare quanto segue:

//100km, 10 anni => prezzo corretto:  €16.80,
//100km, 70 anni => prezzo corretto: €12.60,

