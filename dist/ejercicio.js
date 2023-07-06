"use strict";
//Indicar un numero para imprimir del 0 al numero indicado por consola
var numero;
var contador = 0;
var finalizar = "no";
numero = +prompt("Indique un numero");
// if (isNaN(numero)){
//     console.log("No es un numero");
// }else{
//     while(contador<numero){
//         contador++;
//         console.log(contador);
// }
// Determinar si un numero es par o impar
do {
    if (numero == 0) {
        alert("El numero es cero");
    }
    else if (isNaN(numero)) {
        alert("No es un numero");
    }
    else if (numero % 2 == 0) {
        alert("El numero es par");
    }
    else {
        alert("El numero es impar");
    }
    finalizar = prompt('desea finalizar');
} while (finalizar != "si");
