/*Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos
iguales o si son los tres distintos. */

var num1:number;
var num2:number;
var num3:number;

num1 = +prompt("Ingres numero 1")!;
num2 = +prompt("Ingres numero 2")!;
num3 = +prompt("Ingres numero 3")!;

if (num1==num2 && num2==num3 && num1==num3 ){
    alert("Numeros son iguales");
}else if (num1==num2 || num2==num3 || num1==num3 ){
    alert("Dos de los numeros son iguales");
}else if (num1!=num2 && num2!=num3 && num1!=num3 ){
    alert("Todos los numeros son diferentes");
}else{
    alert("otro");1111
}
