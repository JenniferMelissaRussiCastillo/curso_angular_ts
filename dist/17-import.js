"use strict";
//Sirve para traer codigo que se exporta desde otro archivo o ts
//La sintaxis es la siguiente
Object.defineProperty(exports, "__esModule", { value: true });
//import { >>lo que queremos importar separado por comas<<} from "rutaArchivo.ts"
const _16_export_1 = require("./16-export"); // estan en la misma carpeta
var nissan = new _16_export_1.Auto(); // color y ruedas son atributos de la clase Auto del archivo export
nissan.ruedas = 4;
nissan.color = "blanco";
var estacionActual = "Verano"; // variavle segun el tipo que solo acepta "Invierno"|"Otoño"|"Verano"|"Primavera"
// si se agina un valor difente a los posibles, segun el tipo genera error
// ejemplo: var estacionActual : estacionesCLima = "Lunes";
