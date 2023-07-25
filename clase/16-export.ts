   //Export: una forma de organizar los archivos del codigo, y poder referenciales
   // en otros archivos de codigo
   //Sencillamente de antepone la palabra export

   export type estacionesCLima = "Invierno"|"Otoño"|"Verano"|"Primavera"

   export interface IPerros {
    nombre: string,
    raza : string,
    edad : number
}

export class Auto{
    color: string ="";
    ruedas: number = 0;

    arrancar(){
        console.log("rummm");
    }
}


