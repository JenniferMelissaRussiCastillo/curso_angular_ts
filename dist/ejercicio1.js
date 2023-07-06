"use strict";
//Ingresar un número y determinar si es par, impar o cero
var numero;
var finalizar = "no";
do {
    numero = +prompt(`Indique un numero`);
    console.log("El numero ingresado es:  " + numero);
    if (Math.sign(numero) == 0) {
        alert('El numero es cero');
    }
    else if (numero % 2 == 0) {
        alert('El numero es par');
    }
    else if (isNaN(numero)) {
        alert('No es un numero');
    }
    else {
        alert('El numero es impar');
    }
    finalizar = prompt("desea finalizar?");
} while (finalizar != "si");
