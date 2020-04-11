// Demande à l'utilisateur de saisir le nombre d'heure travaillée
let heureTravaille = window.prompt(" Saisir le nombre d'heure travaillée" );
// Demande à l'utilisateur de saisir le salaire par heure
let salaireHeure   = window.prompt('Saisir le salaire par heure');

// salaire de la semaine 
let salaireSemaine = heureTravaille * salaireHeure;

document.write(`Le salaire de la semaine est de: ${ salaireSemaine }`);
