"use strict";
(() => {
    //declaracion de funciones en java script forma 1
    function ejemFuncion() {
        // bloque de codigo que se ejecuta
    }
    //delcaracion de funcion por variable
    var unaFuncionVar = function () {
        // bloque de codigo que se ejecuta
    };
    // Forma de definir variable, arrow function 
    var ejemArrowFuc = () => {
        //bloque de codigo que se ejecuta
    };
    // en las funciones en typesript se puede asingar un tipo a los parametros que se pasan a la funcion
    var funcionTS = (a, b) => {
        return a + b;
    };
    // los parametros de validan segun el tipo asigando en la declaracion de la funcion
    funcionTS(5, 3);
    //parametros opcionales
    function concatenar(a, b) {
        return a + (b || "  vacio"); // si el segundo parametro es nulo, concatena con ""
    }
    // al llamar la funcion y no enviar los dos parametros genera error cuando en el tipo del paramtro no se define como opcional
    //concatenar("hola");
    console.log(concatenar("Hola")); //cuando el segundo parametro viene vacio, concatena con " vacio"
    console.log(concatenar("Hola", "Saludos mundo"));
    //parametros opcionales con valor predefinido, en el tipo del parametro se asigna un valor por defecto
    function concatenarV2(a, b = "valor vacio") {
        return a + b;
    }
    console.log(concatenarV2("Ejemplo concatena con opcion predefinido")); //no genera error
    // tipado de funciones
    //Cuando la funcion no tiene retorno, es tipo void
    var saludar = () => {
        console.log("Hola solo saludo");
    };
    function funcionMultiplicar(a, b) {
        const resultado = a * b;
        return resultado;
    }
    console.log(funcionMultiplicar(2, 5));
})();
