var a ;
(()=>{
    // declaracion EXPLICITA
    let declaracionExplicita : string = 'Hola';

    // declaracion IMPLICITA
    let declaracionImplicita = "Soy implicito";

    let unNumero : number = 3;
    declaracionImplicita = unNumero.toString() + " Hola  I'm estoy cambiando con un " ;

    //Formas de crear un string
    //' -> Comilla sencilla
    //" -> Comilla doble
    //` -> Backticks (Tilde invertida)

    //Concatenacion con ' o " tenemos que usar el +

    // cuando usamos las tildes invertidas estamos creando un template string

    let unaNuevaFrase = `Esto es un mensaje concatenado con una variable ${declaracionExplicita} 
    
    - ${declaracionExplicita} `;

    //Beneficios del template string
    //Uso de variables dentro de ellos
    //No necesitamos combinaciones especiales para salto de linea, tabular
    //Tenemos habilitadas las comillas sencillas y las comillas dobles

    // a = prompt('Un mensaje para pedir algo');
})();