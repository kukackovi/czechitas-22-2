/*Nechte uživatele zadat 3 čísla a určete největší z nich
- výsledek vypište do konzole ve formátu
"Největší číslo je A: 37" */

let cislo1 = Number(prompt('Zadejte první číslo'));
let cislo2 = Number(prompt('Zadente druhé číslo'));
let cislo3 = Number(prompt('Zadejte třetí číslo'));

if (cislo1 > cislo2 && cislo1 > cislo3) {
  console.log('Největší číslo je A: ' + cislo1);
}
if (cislo2 > cislo1 && cislo2 > cislo3) {
  console.log('Největší číslo je B: ' + cislo2);
}
if (cislo3 > cislo1 && cislo3 > cislo2) {
  console.log('Největší číslo je C: ' + cislo3);
}
