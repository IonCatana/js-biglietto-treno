const prezzoKm = 0.21;

const km = prompt('Quanti km vuoi percorere?');

const age = prompt('Quanti anni hai?');

let prezzoTotale = prezzoKm * km;

let scontoMinoreni = (prezzoTotale * 20) / 100;

let scontoAnziani = (prezzoTotale * 40) / 100;

if (age < 18) {
  document.getElementById('prezzo').innerHTML = parseFloat (prezzoTotale - scontoMinoreni ) .toFixed (2);
} else if (age > 65) {
  document.getElementById('prezzo').innerHTML = parseFloat ( prezzoTotale - scontoAnziani ) .toFixed (2) ;
} else {
  document.getElementById('prezzo').innerHTML = parseFloat ( prezzoTotale) .toFixed (2);
}
