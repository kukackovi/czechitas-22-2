let cislo = Number(prompt('Zadejte číslo'));

//akumulacni soucet - do nej budeme pricitat
let soucet = 0;
let vypocet = 0;

while (cislo !== 0) {
  console.log('Vstup: ' + cislo);
  soucet = soucet + cislo;
  vypocet = vypocet + ' + ' + cislo;
  console.log(vypocet + ' = ' + soucet);
  cislo = Number(prompt('Zadejte prosím číslo'));
}

console.log('Finální součet je ' + soucet);
