(()=>{
//los tipos de datos null o undefined deben ser declarados de forma explicita
// es posibloe declarar y asignar valor en la misma linea
var varNull: null = null;
// declaralar la variable y asignar el valor luego
var varIndefinida : undefined;
varIndefinida= undefined;
// declaracion de objetos
var ejemObjeto:{
    nombre:string,
    edad: number|null|undefined;
}
// asignar valor al objeto
= {
    nombre : "Javier Vargas",
    edad : 28
}
//"?" (Optional chaining), Nos va a permitir validar si nuestro atributo es null o undefined
var edadProfesor : number = ejemObjeto?.edad ?? 0;
    
//"!" (assertion operator o non-null assertion operator) Indica que nuestro atributo no va a venir null o undefined
var edadProfesorV2 : number = ejemObjeto.edad! ;

// || evalua => undefined , null , "" , 0 
// ?? evalua => undefined , null 

})();