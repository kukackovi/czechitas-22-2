// === rovná se
// !== nerovná se
// &&  a zároveň
// ||  Nebo (OR)
//
// == dvě rovnítka znamena, že javacript převádí proměnné na stejný datový typ
/*
let vek = 18;
//Jsi plnoletý */

// Nejsi plnoletý
// () nějaký vyraz nebo matematická operace nebo funkce
// hranaté závorky - přístup do pole
// složené závorky - blok kodu, objekty,
/*
if (vek >= 18) {
  console.log('Výborně, jsi plnoletý');
} else {
  console.log('Nejsi plnoletý');
}
*/

/*Přijměte jméno jako vstup od uživatele, dále nechte 
zadat jeho věk a vypište na základě věku jednu ze 
dvou vět ve tvaru:
a) Vaše jméno je Marian, je vám 30 let a tak máte 
právo řídit auto.
b) Vaše jméno je Marian, je vám 14 let a tak musíte 
počkat ještě 4 let, než budete moci řídit auto.
*/

let jmeno = prompt('Jak se jmenuješ?');
let vek = Number(prompt('Kolik je ti let?'));
let kolikZbyva = 18 - vek;

if (vek >= 18) {
  console.log(
    'Vyše jméno je ' +
      jmeno +
      ', je Vám ' +
      vek +
      ' let a tak máte právo řídit auto.'
  );
} else {
  console.log(
    'Vyše jméno je ' +
      jmeno +
      ', je Vám ' +
      vek +
      ' a tak musíte počkat ještě ' +
      kolikZbyva +
      ' let, než budete moci řídit auto.'
  );
}

/* tip: `Vyše jméno je ${jmeno}, je vám ${vek} let a tak musite počkat...` - vypadá to lépe */
