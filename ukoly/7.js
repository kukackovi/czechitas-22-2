/* Nechte uživatele zadat 3 čísla - strany trojúhelníku a 
zjistěte, zda jde trojúhelník sestrojit
- trojuhelnik jde sestrojit, pokud soucet 2 
nejmensich stran je > nez treti strana*/

let stranaA = Number(prompt('Zadejte stranu a'));
let stranaB = Number(prompt('Zadejte stranu b'));
let stranaC = Number(prompt('Zadejte stranu c'));

/*
function max(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}
*/
/*
function isValidTriangle(side, sum) {
  if (sum > side) {
    return true;
  } else {
    return false;
  }
}*/
/*
function isValidTriangle(side, sum) {
  if (sum > side) {
    return true;
  } 
  return false;
}*/

function isValidTriangle(side, sum) {
  return sum > side;
}

if (
  isValidTriangle(stranaA, stranaB + stranaC) &&
  isValidTriangle(stranaB, stranaA + stranaC) &&
  isValidTriangle(stranaC, stranaA + stranaB)
) {
  console.log('Valid triangle');
} else {
  console.log('Invalid triangle. What are you trying to pull off?!');
}

/*


if (stranaA > stranaB && stranaA > stranaC && stranaB + stranaC > stranaA) {
  console.log('Trojúhelník jde sestroji');
}

if (stranaA > stranaB && stranaA > stranaC && stranaB + stranaC < stranaA) {
  console.log('Trojúhelník nelze sestroji');
}

if (stranaB > stranaA && stranaB > stranaC && stranaA + stranaC > stranaB) {
  console.log('Trojúhelník jde sestroji');
}

if (stranaB > stranaA && stranaB > stranaC && stranaA + stranaC < stranaB) {
  console.log('Trojúhelník nelze sestroji');
}

if (stranaC > stranaA && stranaC > stranaB && stranaA + stranaB > stranaC) {
  console.log('Trojúhelník jde sestroji');
}

if (stranaC > stranaA && stranaC > stranaB && stranaA + stranaB < stranaC) {
  console.log('Trojúhelník nelze sestroji');
}
*/
