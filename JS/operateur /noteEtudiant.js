let note1 = parseFloat(prompt("Saisir la note de participation 1: "));
let note2 = parseFloat(prompt("Saisir la note control continue numero 1: "));
let note3 = parseFloat(prompt("Saisir la note control continue numero 1: "));
let note4 = parseFloat(prompt("Saisir la note de l'examen finale: "));

let participation = note1 * 0.1;
let controlContinue1 = note2 * 0.25;
let controlContinue2 = note3 * 0.25;
let examenFinale = note4 * 0.4;

let noteFinal = participation + controlContinue1 + controlContinue1 + examenFinale;

document.write(`La note finale de l'étudiante est: ${ noteFinal }`);
