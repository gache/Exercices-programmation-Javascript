let numero1 = parseInt(prompt("Saisir un numéro: "));
let numero2 = parseInt(prompt("Saisir autre numéro: "));

if(numero1 > numero2){
    document.write(`Le numéro ${ numero1 } es majeur`)
}else if(numero2 > numero1){
    document.write(`Le numéro ${ numero2 } es majeur`)
}else{
    document.write(`Les numéros sont égal`)
}