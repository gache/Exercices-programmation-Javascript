let numero1 = parseInt(prompt("Saisir un numero: "));
let numero2 = parseInt(prompt("Saisir un deuxième numero: "));

if (numero1 % 2 == 0 && numero2 % 2 == 0) {
  console.log("les deux numeros sont paire");
} else if (numero1 % 2 != 0 && numero2 % 2 != 0) {
  console.log("les deux numeros sont impaire");
} else {
  console.log("Un numero de numero est paire et l'autre impaire ");
}
