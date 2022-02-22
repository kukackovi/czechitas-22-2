/*Nadefinujme si proměnné a jejich hodnoty potřebné k uložení následujících informací:
 Jméno muže a ženy ​
 Rok a měsíc narození muže i ženy​
Spočteme rozdíl věku muže a ženy v měsících a vypíšeme ve formátu​ "[muz] a [zena] jsou od sebe věkově vzdáleni [XY] měsíců​"
Pro zjednodušení úkolu počítejme, že je muž vždy starší! (ať nemusíme řešit absolutní hodnotu z Math.abs())
*/

let jmenoMuze = 'Alan';
let jmenoZeny = 'Marie';

let rokNarozeniMuz = 2000;
let rokNarozeniZena = 2002;

let mesicNarozeniMuz = 10;
let mesicNarozeniZena = 09;

// spoctu si celkovy pocet mesicu pro zenu a pro muze
let pocetMesicuMuz = rokNarozeniMuz * 12 + mesicNarozeniMuz;
let pocerMesicuZena = rokNarozeniZena * 12 + mesicNarozeniZena;

// spočtu výsledek
let vysledek = pocerMesicuZena - pocetMesicuMuz;

// vypísu do konzole
console.log(
  jmenoMuze +
    ' a ' +
    jmenoZeny +
    ' jsou od sebe věkově vzdáleni ' +
    vysledek +
    ' měsíců'
);
