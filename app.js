// Prezzo del km
const prezzoKm = 0.21;
console.log(prezzoKm);

// Da inserire i Km da percorere dell utente
const km = prompt('Quanti km vuoi percorere?');
console.log(km);

if (isNaN(km)) {
  alert('Attenzione inserisci solo numeri!');
}

// Da inserire i anni dell utente
const age = prompt('Quanti anni hai?');
console.log(age);

if (isNaN(age)) {
  alert('Attenzione inserisci Only Numbers!');
}

let prezzoTotale = prezzoKm * km;
console.log(prezzoTotale);

let scontoMinoreni = (prezzoTotale * 20) / 100;
console.log(scontoMinoreni);

let scontoAnziani = (prezzoTotale * 40) / 100;
console.log(scontoAnziani);

if (age < 18) {
  document.getElementById('prezzo').innerHTML = parseFloat(
    prezzoTotale - scontoMinoreni
  ).toFixed(2);
} else if (age > 65) {
  document.getElementById('prezzo').innerHTML = parseFloat(
    prezzoTotale - scontoAnziani
  ).toFixed(2);
} else {
  document.getElementById('prezzo').innerHTML =
    parseFloat(prezzoTotale).toFixed(2);
}
