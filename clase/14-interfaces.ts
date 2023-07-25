(()=>{
    // Las interfaces son un tipo de plantilla o contrato que permiten asignarle una
    //forma a los objetos

    //declarado en forma de type
    type tipoPerrito={
        nombre:string;
        edad:number;
        raza:string;
    }
    // se crea y declara la variable de tipo perrito
    var unPerrito : tipoPerrito;
    // se le asigna valores a la varialbe un perrito segun el tipo
    unPerrito ={
        nombre:"Dakota",
        edad:9,
        raza:"coker"
    }
    // se crea la interface
    interface ITipoPerrito{
        nombre:string;
        edad:number;
        raza:string;
    }

    // se declara la variable de tipo interface
    var otroPerrito: ITipoPerrito;

    // se asigna valor a la variable de tipo interfaz
    otroPerrito={
        nombre: "kiara",
        edad: 10,
        raza:"Pincher"
    }
    // Con la interfaz es posible la relacion de herencia extend
    // denotar atributos opcionales con ?
    interface IObjetoQueHereda extends ITipoPerrito{
        readonly dueno?:string;
        vacunas:string; 
    }
    // readonlye: atributos de solo lectura, despues de inicializado no puede cambiar
    
    // se declara una variable de tipo interfac IObjetoQueHereda, que va a tener los atibutos
    // nombre, edad y raza, mas los atribuor dueno y vacunas

    var nuevoPerrito: IObjetoQueHereda;
    nuevoPerrito = {
        nombre:"Maya",
        edad: 9,
        raza:"Criolla",
        dueno: "Jennifer",
        vacunas:"al dia"
    }

    // si se quiere asignar valor a una variable de solo lectura genera error
    //nuevoPerrito.dueno=""
    
})()