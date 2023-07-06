(()=>{
    let varBoolean : boolean = true;
    var unaVar:number
    // en JS si puede ser null o undefined
    //varBoolean = null;
    //varBoolean = undefined;
    varBoolean = isNaN(5);
    console.log(varBoolean);
    //declaracion implicita
    let varBooleanImpl= false;
    //operadores booleanos
    // && and
    // || or
    // ! negacion
    //usados en los  controles de flujo
    //if()()
    //if ()()else ()
    //if ()()else if()ekse ()
    //whike ()()
    //do() while ()
    //operador ternario ->() ? :

    //Nota: () van las condiciones o la variable boolenada y en {} va el codigo de ser true
    varBoolean= false;
    if(varBoolean){
        console.log("Entra en el if # 1");
    }else{
        console.log("Entra en el else  # 1");
    }

    varBoolean = 5>10;

    if(varBoolean){
        console.log("Entra en el if # 2");
    } else if (varBoolean || true){
        console.log("entra en el else if #2");
    } else{
        console.log("Entra en el eslse #2");
    }

    // ejemplo de while y do while
    let contador= 0;

    while(contador<10){
        console.log(contador);
        contador++;
    }

    // Ejemplo de operador ternario
    let varNumerica: number = 5>10? 5 :10;

    //diferenncia entre var y let

    // if(varBoolean){
    //     let unaVar=5;
    // }
    // console.log(unaVar);

    if(true){
        var ejemvVar=5;
    }
    console.log(ejemvVar);


    
})();