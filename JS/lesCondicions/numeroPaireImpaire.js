let numero1 = parseInt(prompt("Saisir un numero: "));
let numero2 = parseInt(prompt("Saisir un deuxième numero: "));

if (numero1 % 2 == 0 && numero2 % 2 == 0) {
  console.log("les deux numéros sont Paires");
} else if (numero1 % 2 != 0 && numero2 % 2 != 0) {
  console.log("les deux numéros sont impaire");
} else {
  console.log("Un numéro est paire et l'autre Impaires ");
}
