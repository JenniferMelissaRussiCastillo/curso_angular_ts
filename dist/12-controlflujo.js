"use strict";
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
    switch(nota){
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




})();
