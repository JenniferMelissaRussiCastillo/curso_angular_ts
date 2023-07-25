"use strict";
(() => {
    // Es una plantilla o molde que nos permite instanciar objetos a partir de ella
    // donde genera las mismas variables (atributos), mismas funciones (metodos)
    // Adicional con la instanciacion se ejecuta un metodo natido llamado el constructor
    class ClaseProfesor {
        //metodos de la clase
        saludar() {
            console.log("Esta funcion de la clase ClaseProfesor no retorna, solo se");
        }
        //metodo constructor siempre se ejcuta por debajo asi no lo declare
        // se puede declarar vacio o que ejecute bloque de codigo dentro del constuctor
        // en el contructor, que recibe parametros se pueden inicializar los atributos
        constructor(paramEdad, paramProf, paramNom) {
            this.edad = paramEdad;
            this.profesion = paramProf;
            this.nombre = paramNom;
        }
    }
    // se crea una variable del tipo del objeto y como el constructor pedia prametros
    // se deben enviar en la declaracion los valores para inicializar la clase
    var unProfesor = new ClaseProfesor(32, "Ingeniera de sistemas", "Jennifer Russi");
    unProfesor.saludar;
    console.log("Se accede al atributo de la clase " + unProfesor.nombre);
})();
