let numero1 = parseInt(prompt("Saisir un numéro: "));
let numero2 = parseInt(prompt("Saisir un deuxième numéro: "));
let numero3 = parseInt(prompt("Saisir un troisième numéro: "));

if (numero1 > numero2 && numero2 > numero3) {
  console.log(`${numero1} ${numero2} ${numero}`);
} else if (numero1 > numero3 && numero3 > numero2) {
  console.log(`${numero1} ${numero3} ${numero2}`);
} else if (numero2 > numero1 && numero1 > numero3) {
  console.log(`${numero2} ${numero1} ${numero2}`);
} else if (numero2 > numero3 && numero3 > numero1) {
  console.log(`${numero2} ${numero3} ${numero1}`);
} else if (numero3 > numero1 && numero1 > numero2) {
  console.log(`${numero3} ${numero1} ${numero2}`);
} else {
  console.log(`${numero3} ${numero2} ${numero1}`);
}
