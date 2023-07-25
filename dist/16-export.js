"use strict";
//Export: una forma de organizar los archivos del codigo, y poder referenciales
// en otros archivos de codigo
//Sencillamente de antepone la palabra export
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
class Auto {
    constructor() {
        this.color = "";
        this.ruedas = 0;
    }
    arrancar() {
        console.log("rummm");
    }
}
exports.Auto = Auto;
