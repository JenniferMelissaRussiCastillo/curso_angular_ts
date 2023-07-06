var a ;
(()=>{
    //declatacion explicita
    let declaExpli:string="hola";
    //deca¡karacion implicita
    let declaImpli ="Soy implicita";

    let unNumero: number= 3;
    declaImpli = unNumero.toString ()+
    'Hola estoy cambiando con un';
    
    //Formas de crear un string
    //' -> Comilla sencilla
    //" -> Comilla doble
    //` -> Backticks (Tilde invertida)
    //Concatenacion con ' o " tenemos que usar el +
    // cuando usamos las tildes invertidas estamos creando un template string
    let unaNuevaFrase = `Esto es un mensaje concatenado con una variable ${declaExpli} 
    
    - ${declaExpli} `;

    console.log(declaImpli+"prueba");
    //Diferencia entre comilla doble "" o comilla sencilla ''
    //Beneficios del template string
    //Uso de variables dentro de ellos
    //No necesitamos combinaciones especiales para salto de linea, tabular
    //Tenemos habilitadas las comillas sencillas y las comillas dobles

    //la variable a se define al incio por fuera de la funcion
    console.log("la variable a se crea fuera de la funcion");
    a = prompt('Un mensaje para pedir algo');
})