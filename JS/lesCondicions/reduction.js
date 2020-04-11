let achat = parseInt(prompt("Saisir le montant de votre achat: "));

if(achat <= 300){
    console.log(`Le valeur à payer est: ${ achat }€`);
}
else if( achat >= 300){
 reduction = (achat * 0.20)
 achat -= reduction
 console.log(`Le valeur à payer avec la redection est de ${ achat }€ `);
}