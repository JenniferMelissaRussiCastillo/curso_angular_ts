"use strict";
/*Escribir un programa que solicite al usuario una letra y muestre un mensaje que diga si es
una vocal o una consonante.
 */
var letra;
var resultado;
letra = prompt("Ingresa el caracter a validar");
if (letra.length !== 1) {
    alert("Debe ingresar solo un caracter");
    resultado = "No ingreso caracter valido";
}
else {
    letra.toLowerCase();
    switch (letra) {
        case "a":
            resultado = "Es una vocal";
            break;
        case "e":
            resultado = "Es una vocal";
            break;
        case "i":
            resultado = "Es una vocal";
            break;
        case "o":
            resultado = "Es una vocal";
            break;
        case "u":
            resultado = "Es una vocal";
            break;
        default:
            resultado = "Es una consonante";
    }
}
alert("El resultado es " + resultado);
