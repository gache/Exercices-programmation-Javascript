let letre = prompt("Saisir une lettre: ").charAt(0);

if (letre == letre.toUpperCase()) {
  console.log(`La lettre ${letre} est majuscule `);
} else {
  console.log(`La lettre ${letre} minuscule`);
}
