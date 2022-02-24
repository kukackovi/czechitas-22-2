/*Napište funkci, který vypíše informaci, zda zadané číslo je 
nebo není prvočíslo.
- prvočíslo - dělitelné pouze 1 a samo sebou
- zbytek po dělení: % - modulo
- v první moment pčedpokládejme, ze číslo JE prvočíslo a 
budeme případně rozporovat toto tvrzeni */

function prvoCislo(cislo) {
  let prvoCislo = true;
  for (let i = 2; i < cislo; i++) {
    if (cislo % i == 0) {
      prvoCislo = false;
      break;
    }
  }
  return prvoCislo;
}

let cislo = Number(prompt('Zadejte cislo'));

if (prvoCislo(cislo)) {
  console.log('Cislo je prvocislo');
} else {
  console.log('Cislo neni prvocislo');
}
