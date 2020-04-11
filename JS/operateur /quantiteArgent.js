// demande de saisir la quantite d'argent
let guillaume = parseInt(prompt("Saisir la quantité d'argent: "));
let louis = guillaume / 2;
let mathieu = (guillaume+louis)/2;

let total = guillaume + louis + mathieu;

console.log(`La quantité d'argent entre les trois est de: ${ total }`);
