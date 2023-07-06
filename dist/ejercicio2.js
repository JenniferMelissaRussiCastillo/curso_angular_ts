"use strict";
/*Ingresar 2 números y mostrar cual número es el mayor. Considerar el caso en que ambos
números son iguales y mostrar por pantalla un texto que diga que los números son
iguales*/
var numero1;
var numero2;
var finalizar = "no";
do {
    numero1 = +prompt("Indique el primer numero");
    numero2 = +prompt("Indique el segundo numero");
    if (numero1 == numero2) {
        alert("Los numeros ingresados son iguales");
    }
    else if (numero1 >= numero2) {
        alert("El numero mayor es. " + numero1);
    }
    else {
        alert("El numero mayor es. " + numero2);
    }
    finalizar = prompt("desea finalizar?");
} while (finalizar != "si");
