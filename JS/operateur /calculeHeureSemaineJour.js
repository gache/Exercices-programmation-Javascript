let heuresTotal = parseInt(prompt("Saisir le nombre d'heure"));

let semaine = heuresTotal / 168;
let jours = (heuresTotal%168) / 24;
let heure = heuresTotal%24;

document.write(`Le nombre de semaine est:${ semaine }
Le nombre de jours est : ${ jours }
Le nombre d'heure est ${ heure }`)