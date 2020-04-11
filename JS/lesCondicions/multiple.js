//Demande d'information
let numero = parseInt(prompt("Saisir un numero: "));

if (numero % 10 == 0) {
  document.write(`Le numéro ${numero} est multiple de 10`);
} else {
  document.write(`Le numéro ${numero} n'est pas  multiple de 10`);
}
