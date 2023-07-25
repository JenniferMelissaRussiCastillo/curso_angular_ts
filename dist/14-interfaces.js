"use strict";
(() => {
    // Las interfaces son un tipo de plantilla o contrato que permiten asignarle una
    //forma a los objetos
    // se crea y declara la variable de tipo perrito
    var unPerrito;
    // se le asigna valores a la varialbe un perrito segun el tipo
    unPerrito = {
        nombre: "Dakota",
        edad: 9,
        raza: "coker"
    };
    // se declara la variable de tipo interface
    var otroPerrito;
    // se asigna valor a la variable de tipo interfaz
    otroPerrito = {
        nombre: "kiara",
        edad: 10,
        raza: "Pincher"
    };
    // readonlye: atributos de solo lectura, despues de inicializado no puede cambiar
    // se declara una variable de tipo interfac IObjetoQueHereda, que va a tener los atibutos
    // nombre, edad y raza, mas los atribuor dueno y vacunas
    var nuevoPerrito;
    nuevoPerrito = {
        nombre: "Maya",
        edad: 9,
        raza: "Criolla",
        dueno: "Jennifer",
        vacunas: "al dia"
    };
    // si se quiere asignar valor a una variable de solo lectura genera error
    //nuevoPerrito.dueno=""
})();
