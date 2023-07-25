(() => {
    // Control de flujo IF: se ejecuta si se cunple la condicion 
    var varCondicion = 5;
    if (varCondicion > 2) {
        console.log("se cumple la condicion");
    }
    // Condicional IF sin los corchetes
    if (varCondicion == 3)
        console.log("No se ejecuta");
    // linea que queda por fuera del IF por que no tiene corchetes
    console.log("Se ejecuta por fuera del if");

    // Control de flujo IF ELSE
    var varCondicion2 = "Hola";
    if (varCondicion2=="adios"){
        console.log("No se ejecuta por que no cumple la condicion");
    }else
    {
        console.log("Se ejecuta el else al no cumplir la condicion del if")
    }

    //Control de flujo IF ELSE IF ELSe
    if (varCondicion2=="a"){
        console.log("No entra por que no cumple la condicion");
    }else if (varCondicion2=="adios")
    {
        console.log("No entra por que no cumple la condicion");
    }else{
        console.log("Si no cumple las condiciones anteriores se ejecuta");
    }

    //Control de flujo Switch case
    var calificacion = 9;
    switch(calificacion){
        case 10:
            console.log("Nota perfecta");
            break;
        case 9:
        case 8:
        case 7:
            console.log("Ha obtenido una buena nota");
            break;
        case 6:
        case 5:
            console.log("Aprobado");
            break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprobado");
            break;
        default: 
            console.log("Nota ingresada incorrecta");
            break;

    }
// Operador ternario, hace una validacion y retorna un valor
// la condicion se escribe antes del operador "?"
// la respuesta valida despues del "?"
// La negacion despues de ":"
var respuestaTer = (calificacion >= 5) ? "Aprobado" : "Reprobado";
console.log("Respuesta del operador ternario"+respuestaTer);

//BLUCES
// while: se ejecuta siempre que la condicion se cumpla
var contadorWhile = 0;
console.log("Inicio del ciclo while, Contador en: "+contadorWhile);

while (contadorWhile<10){
    console.log("Contador"+contadorWhile);
    contadorWhile++;
}
//Do While: Se va a ejecutr por lo menos una vez y se sigue ejecutadno si se cumple la condicion
console.log("Inicio del ciclo DO While, contador en:"+contadorWhile);
do{
    console.log("Ejecucion Do While"+contadorWhile);
    contadorWhile++;
}while(contadorWhile<20);
//Ciclo for: Se ejecuta hasta que se cumpla la condicion, y ejecuta segun el parametro al finalizar la validacion
console.log("Inicio el ciclo FOR")
for (let i=0;i<=10;i++){
    console.log("Se imprimime valor del parametro del ciclo For:  "+i);
}

// Array function: Funciones que trabajan con array
// la funcion for each para cada elemento del array ejecuta el bloque de codigo, para el ejemplo la 
// impresion por consola
console.log("EjInicio ejemplo de array function");
let unArrayVariable = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
unArrayVariable.forEach((elemento,indice,array)=>{
    console.log(`Soy el elemento ${elemento}`);
    console.log(`Voy en la posicion ${indice}`);
    console.log(`My array es ${array}`);
});
})();