(()=>{
    //Objetos: Variable compleja que permite almacenar otroas variables dentro de ella
    //Las variaibles dentro del objeto se llemana atributos y las funciones metodos

    //Declaracion del onjeto implicito
    var unObjeto = new Object();
    unObjeto = {
        nombre : "Dakota",
        edad : 9,
        raza: "Cocker Spaniel"}
    
    //Declaracion del objeto explicita
    var otroObjeto: object = new Object();
    otroObjeto ={
        nombre: "Maya",
        edad:9,
        raza: "Criolla"
    }
    //llamar la funcion
    // ejemplo de funcion como arrow fuction
    //var funLLamarPerrito = ()=>{
    //
    //  }

   // Otra forma de declarar explicitamente
  var unObjetoExplicito : { nombre: string, edad:number, raza? :string}
  unObjetoExplicito = {
      nombre: "brandy",
      edad : 4,
      raza : ""
  }
  var funcLlamarPerrito = (perrito: {nombre: string, edad: number, raza?:string }):void =>{
    console.log(perrito.nombre);
    console.log(perrito.edad);
    let raza:string;
    raza = perrito.raza ?? "desconocido"; 
    // <-- Se pone despues del atributo que se afirma que no sera null
    
    console.log(raza);
}
funcLlamarPerrito (unObjetoExplicito);
// not null operators
// simbolo || evalua undefined , null, "", 0 
// simbolo ?? evalua undefined, null

})()