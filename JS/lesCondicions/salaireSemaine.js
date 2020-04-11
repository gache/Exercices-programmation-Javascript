let heureTravaille = parseInt(prompt("Saisir le nombre d'heure travaillé: "));

if (heureTravaille <= 40) {
  let salaireSemaine = heureTravaille * 16;
  console.log(`Le salaire du travailleur est de ${salaireSemaine}`);
} else {
  salaireSemaine = 40 * 16 + (heureTravaille - 40) * 20;
  console.log(`Le salaire du travailleur est de ${salaireSemaine}`);
}
