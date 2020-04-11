let salaire = 1000;
let nVoitureVendu = parseInt(prompt("Saisir le nombre de voiture vendu dans le mois"));
let valeurVoiture = parseInt(prompt("Saisir le valeur de la voiture:"));


let commision1 = (nVoitureVendu * 150);
let commision2 = (valeurVoiture * 0.05 * nVoitureVendu );


let salaireMensuel = salaire + commision1 +  commision2

document.write(`Le salire mensuel de l'employé est ${ salaireMensuel }`)