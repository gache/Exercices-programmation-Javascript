let getNumero = parseInt(prompt("Saisir un numéro: "));

if (getNumero < 10) {
  console.log(`le numéro ${getNumero} a une chiffre`);
} else if (getNumero < 100) {
  console.log(`le numéro ${getNumero} a deux chiffres`);
} else if (getNumero < 1000) {
  console.log(`le numéro ${getNumero} a trois chiffres`);
} else if (getNumero < 10000) {
  console.log(`le numéro ${getNumero} a quartre chiffres`);
} else if (getNumero < 100000) {
  console.log(`le numéro ${getNumero} a cinque chiffres`);
}
