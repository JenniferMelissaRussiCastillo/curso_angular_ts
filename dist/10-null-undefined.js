"use strict";
(() => {
    var _a;
    //los tipos de datos null o undefined deben ser declarados de forma explicita
    // es posibloe declarar y asignar valor en la misma linea
    var varNull = null;
    // declaralar la variable y asignar el valor luego
    var varIndefinida;
    varIndefinida = undefined;
    // declaracion de objetos
    var ejemObjeto 
    // asignar valor al objeto
    = {
        nombre: "Javier Vargas",
        edad: 28
    };
    //"?" (Optional chaining), Nos va a permitir validar si nuestro atributo es null o undefined
    var edadProfesor = (_a = ejemObjeto === null || ejemObjeto === void 0 ? void 0 : ejemObjeto.edad) !== null && _a !== void 0 ? _a : 0;
    //"!" (assertion operator o non-null assertion operator) Indica que nuestro atributo no va a venir null o undefined
    var edadProfesorV2 = ejemObjeto.edad;
    // || evalua => undefined , null , "" , 0 
    // ?? evalua => undefined , null 
})();
