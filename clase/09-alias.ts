(()=>{
    // ALias ahorra el tabajo de poner un conjunto de types cada vez que se vaya a declarar
    type tipos = "Navidad" |"Semana Santa"| number;

    //Declarar de manera explicitia en alguna variiable
    var diaFestivo : tipos;
    
    diaFestivo= 31;
    diaFestivo =  "Navidad";

})()