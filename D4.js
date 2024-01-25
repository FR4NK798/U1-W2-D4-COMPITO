/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const a = 7;
const b = 5;
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return a * b;
}
area(a, b);
console.log(area(a, b));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma
  se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  } else {
    return int1 + int2;
  }
}
crazySum(a, b);
console.log(crazySum(a, b));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta 
 tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numForn) {
  if (numForn > 19) {
    return Math.abs(numForn - 19) * 3;
  } else {
    return Math.abs(numForn - 19);
  }
}

crazyDiff(a);
console.log(crazyDiff(a));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) 
 oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
boundary(a);
console.log(boundary(a));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const string = "EPICODE ciao";
/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE" + string;
  }
}

epify(string);

console.log(epify(string));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
if (a < 0) {
  console.log("true");
} else {
  console.log("false");
}
/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(a) {
  if (a % 3 === 0) {
    return "multiplo di tre";
  } else if (a % 7 === 0) {
    return "multiplo di 7";
  } else {
    return false;
  }
}
check3and7(a);
console.log(check3and7(a));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/
const e7 = "EPICODE";
function reverseString(string) {
  let arrayDaParola = [];
  arrayDaParola = string.split("");
  // console.log(arrayDaParola);
  const arrayReverse = [];
  for (let i = 0; i < arrayDaParola.length; i++) {
    arrayReverse.unshift(arrayDaParola[i]);
    // console.log(arrayReverse);
  }
  return arrayReverse.join("");
  // return arrayReverse;
}

reverseString(e7);
console.log(reverseString(e7));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const e8 = "ciao francesco";
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string) {
  let arrayParole = string.split(" ");
  console.log(arrayParole);
  let parola = null;
  for (let i = 0; i < arrayParole.length; i++) {}
}

upperFirst(e8);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const stE9 = "francesco";

function cutString(string) {
  // let strToArray = null;
  // for (let i = 0; i < string.length; i++) {
  let strToArray = string.split(""); //strToArray array di lettere
  // console.log(strToArray);
  strToArray.pop();
  // console.log(strToArray);
  strToArray.shift();
  let nuovaStringa = strToArray.join("");
  return nuovaStringa;
  // }
}

cutString(stE9);
console.log(cutString(stE9));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n 
 e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const esercizio = 10;

function giveMeRandom(n) {
  const randomNum = Math.floor(Math.random() * n + 1);
  // random(n);
  console.log("Numero random: ", randomNum);
  let arrayRand = [];
  for (let i = 0; i < randomNum; i++) {
    arrayRand.push(Math.floor(Math.random() * n + 1));
    // console.log("prova", arrayRand);
  }
  return arrayRand;
}
// function random(n) {
//   let randomNum = Math.floor(Math.random() * n + 1);
//   console.log(randomNum);
// }
// random(esercizio);
giveMeRandom(esercizio);
console.log(giveMeRandom(esercizio));
