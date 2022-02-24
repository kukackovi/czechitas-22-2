/* Čti od uživatele čísla tak dlouho, dokud nezadá 0 a vždy
vypiš NAAKUMULOVANÝ součet těchto číse */

let cislo = Number(prompt('Zadejte číslo'));

//akumulacni soucet - do nej budeme pricitat
let soucet = 0;

while (cislo !== 0) {
  console.log('Vstup: ' + cislo);
  soucet = soucet + cislo;
  console.log('Naakumulovaný součet: ' + soucet);
  cislo = Number(prompt('Zadejte prosím číslo'));
}

console.log('Finální součet je ' + soucet);
