"use strict";
(() => {
    //declaracion implicita
    var listaDeNumeros = [1, 2, 3, 4, 5];
    // listaDeNumeros = [1,2,3,4,5,"yo tambien entro"];
    var listaDePaises = ["Argentina", "Chile", "Colombia"];
    console.log(listaDePaises);
    var formaListaPaisesV2 = ["Argentina", "Chile", "Colombia"];
    var matriz = [[true, true],
        [false, true],
        [true, false]]; //posicion 3
    var matriz2 = [[true, true],
        [false, true],
        [true, false]]; //posicion 3
    //ejemplo tupla implicito
    var ejemTupla = [1, "colombia", true];
    ejemTupla = [1, "Colombia", 100];
    // ejemplo tupla explicito
    var ejemTupla2;
    //  ejemTupla2 = ["hola", true,2);
    //   ejemTupla.map(fuction(elemento,indice,array){},this);
    var ejemTuplaEx = [1, "colombia"];
    var ejemTupla3 = [1, "Colombia"];
    ejemTupla.map((elemento, indice, array) => elemento + "concatenado");
    ejemTupla.map((elemento) => {
        return elemento + "concatenado";
    });
})();
