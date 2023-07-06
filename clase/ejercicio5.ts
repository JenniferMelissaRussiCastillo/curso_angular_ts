/*
Determinar cuánto se debe pagar por una cantidad de lápices comprados considerando
que, si son 1000 o más lápices, existe un descuento de 7%, teniendo en cuenta que el
costo por lápiz es de $1.200.*/

var cantidad:number;
const valorLapiz:number= 1200;
var valorPagar:number;

cantidad =+prompt("Ingresa cantidad de lapices comprados")!;

if (cantidad>=1000){
    valorPagar =(cantidad*valorLapiz)/1.07;
    alert("Se aplica descuento por compras al por mayor");
    alert("El valor a pagar por  "+cantidad+"  lapices, es "+valorPagar);
}else {
    valorPagar = cantidad*valorLapiz;
     alert("El valor a pagar por  "+cantidad+"  lapices, es "+valorPagar);
}
