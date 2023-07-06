/*Diseña un programa que pida el valor del lado de un cuadrado en centímetros y muestre
el valor de su perímetro y el de su área.
 */

var ladoCuadrado:number;

ladoCuadrado =+prompt("Ingrese el valor del lado del cuadrado en cm")!;

function calcularPerimetro(ladoCuadrado:number){
    var perimetro = ladoCuadrado*4;
    return perimetro
}

function calcularArea(ladoCuadraro:number){
    var area = ladoCuadrado*ladoCuadrado;
    return area
}

alert("El perimetro del cuadrado es:  "+calcularPerimetro(ladoCuadrado)+" cm"+"\n El area del cuadrado es:  "+calcularArea(ladoCuadrado)+" cm2");