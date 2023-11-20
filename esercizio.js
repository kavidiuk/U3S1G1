var utente1 = 5;
var utente2 = 6;
var numeroCasuale = Math.floor(Math.random() * 100);
var result1 = Math.abs(utente1 - numeroCasuale);
var result2 = Math.abs(utente2 - numeroCasuale);
if (utente1 == numeroCasuale) {
  console.log("Il primo utente ha indovinato il numero casuale");
} else if (utente2 == numeroCasuale) {
  console.log("Il secondo utente ha indovinato il numero casuale");
} else if (utente1 == utente2) {
  console.log("Il primo utente e il secondo utente hanno lo stesso numero");
} else if (result1 < result2) {
  console.log("Il primo numero si avvicina al risultato rispetto al secondo numero");
} else if (result2 < result1) {
  console.log("Il secondo numero si avvicina al risultato rispetto al primo numero");
}
