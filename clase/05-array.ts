(()=>{
    //declaracion implicita
    var listaDeNumeros = [1,2,3,4,5];
    // listaDeNumeros = [1,2,3,4,5,"yo tambien entro"];
    var listaDePaises: string[] =["Argentina", "Chile","Colombia"];
    console.log(listaDePaises);
    var formaListaPaisesV2 : Array<string> =["Argentina", "Chile","Colombia"];

    var matriz : boolean[][] = [[true,true], //posicion 0
                                [false,true], // posisicon 1
                                [true,false]] //posicion 3

    var matriz2: Array<Array<boolean>> = [[true,true], //posicion 0
                                        [false,true], // posisicon 1
                                        [true,false]] //posicion 3
    //ejemplo tupla implicito
    var ejemTupla = [1,"colombia",true];
    ejemTupla = [1,"Colombia",100];

    // ejemplo tupla explicito
    var ejemTupla2 :(string | boolean| number)[];
   //  ejemTupla2 = ["hola", true,2);

    //   ejemTupla.map(fuction(elemento,indice,array){},this);
   
    var ejemTuplaEx : (number | string )[] = [1,"colombia"];
    
    var ejemTupla3 : (number| string)[] = [1,"Colombia"];

    ejemTupla.map((elemento,indice,array)=> elemento+"concatenado");

    ejemTupla.map((elemento)=>{
        return elemento+"concatenado"
    });




})();
