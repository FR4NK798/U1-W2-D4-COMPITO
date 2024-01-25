/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const l1 = 5;
const l2 = 5;
function area(l1, l2) {
  let area = l1 * l2;
  console.log("Area del rettangolo è: ", area);
}

area(l1, l2); //FUNZIONA

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const numInt1 = 5;
const numInt2 = 5;
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
  let somma = num1 + num2;
  if (num1 === num2) {
    return somma * 3;
  } else {
    return somma;
  }
}

crazySum(numInt1, numInt2);

console.log(crazySum(numInt1, numInt2)); //FUNZIONA

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
let numES3 = 20;
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numFornito) {
  let diffAssoluta = numFornito - 19;
  if (numFornito > 19) {
    diffAssoluta = diffAssoluta * 3;
    diffAssoluta = Math.abs(diffAssoluta);
    return diffAssoluta;
  } else {
    diffAssoluta = Math.abs(diffAssoluta);
    return diffAssoluta;
  }
  // var num2 = Math.abs(num);
}

crazyDiff(numES3);

console.log(crazyDiff(numES3)); //FUNZIONA

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) 
 oppure
 se n è uguale a 400.
*/
let n = 1;
/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

boundary(n);

console.log(boundary(n)); //FUNZIONA

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
let sES5 = "Ciao";
/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringForn) {
  if (stringForn.startsWith("EPICODE")) {
    return stringForn;
  } else {
    stringForn = stringForn + " " + "EPICODE";
    return stringForn;
  }
}
epify(sES5);
console.log(epify(sES5)); //FUNZIONA

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
let numES6 = 14;
/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numPos) {
  // let multiplo3 = null
  // let multiplo7 = null
  if (numPos % 3 === 0) {
    // return multiplo3 = true;
    return `Il numero: ${numPos} è un multiplo di 3`;
  } else if (numPos % 7 === 0) {
    // return multiplo7 = true;
    return `Il numero: ${numPos} è un multiplo di 7`;
  } else {
    return "Il numero non è un multiplo di 3 o di 7";
  }
  // if(multiplo3 === true){
  //     console.log(`Il numero: ${numPos} è un multiplo di 3`)
  // }else if(multiplo7 === true){
  //     console.log(`Il numero: ${numPos} è un multiplo di 7`)
  // }
}
check3and7(numES6);
console.log(check3and7(numES6)); //FUNZIONA MA IL CONSOLE ESCE DUE VOLTE

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/
let strE7 = "epicode";
console.log("Prima: ", strE7);
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringForn) {
  const stringaLettere = stringForn.split(""); //un array con tanti caratteri
  // console.log(stringaLettere);
  const arrayReverse = [];
  for (let i = 0; i < stringaLettere.length; i++) {
    // const singolaLettera = stringaLettere[i];    //ogni lettera FORSE

    // console.log(singolaLettera);
    //CREARE UN ARRAY CON I CARATTERI AL CONTRARIO

    arrayReverse.unshift(stringaLettere[i]); //reverse

    // console.log(arrayReverse);

    // const stringaReverse = arrayReverse  //aggiunge elemento in prima posizione PUSH ultima POS
    // console.log(stringaReverse);
    // return stringaReverse
  }
  // arrayReverse.join('');
  // console.log(arrayReverse);
  console.log("dopo", arrayReverse.join(""));
  // return arrayReverse;
  // console.log("Prova stringa al contrario: ", stringaReverse)
}

reverseString(strE7); //FUNZIONA

// console.log(reverseString(strE7));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const provaStringa = "ciao paolo";
console.log(provaStringa);

function upperFirst(string) {
  const arrayParole = string.split(" "); //array con piu stringhe al suo interno
  // const arrayLetter = string.split("");
  const nuovoArray = arrayParole.slice(0, 1); //ritorna un array solo con una parola
  const arrayAstringa = nuovoArray.join(""); //singola parola a stringa
  const arrayLettere = arrayAstringa.split(""); //array da singole lettere di una parola
  const parolaMaiuscola = arrayLettere[0].to;

  // return arrayParole
  // return nuovoArray
  // return nuovoArrayScomposto
  // return arrayAstringa
  return arrayLettere;
}
// provaStringa = strPiuParole

// upperFirst(string)
console.log(upperFirst(provaStringa));

// console.log(strPiuParole)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ //FUNZIONA
// const prova = "piergiorgio"

function cutString(string) {
  //nuova stringa senza primo e ultimo carattere
  //trasformare stringa in array
  const nuovoArray = string.split(""); //array con tante lettere
  nuovoArray.pop();
  nuovoArray.shift();
  //creazione stringa

  // arrayProva.pop();
  console.log(nuovoArray.join(""));
}

// cutString(prova)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const randNums = [];
// let number = 5;
// console.log("Numero random: ",number)            FUNZIONA
//ritorna array contenent n numeri casuali tra 0 e 10
function giveMeRandom(n) {
  const arrayRandom = [];
  for (let i = 0; i < n; i++) {
    const Num = Math.floor(Math.random() * 10);

    arrayRandom.push(Num);
    // console.log("Array random: ",arrayRandom)
    // return arrayRandom
  }
  return arrayRandom;
}

// giveMeRandom(number)

// console.log(giveMeRandom(number));
