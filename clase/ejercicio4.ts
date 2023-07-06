var horasTrabajadas:number;
const valorHora:number=23000;
const horasLaborales:number=48;
var salarioEmpleado:number;
var horasExtras:number;
var moneda:string;

// Falta dar formato a moneda

(()=>{
    horasTrabajadas = +prompt("Ingresa cantidad de horas laboradas")!;
    if (horasTrabajadas>48){
        horasExtras = horasTrabajadas- horasLaborales;
        salarioEmpleado = (horasLaborales*valorHora) + (horasExtras*valorHora);
        console.log((horasLaborales*valorHora));
        console.log (horasExtras*valorHora);
        alert("Salario empleado: \n"+"Salario base=  $"+(horasLaborales*valorHora) +"\nSalario horas extras= $"+(horasExtras*valorHora)+"\nSalario total = $"+salarioEmpleado);
    }else{
        salarioEmpleado= horasTrabajadas *valorHora;
        console.log(horasTrabajadas*valorHora);
        alert("Salario empleado: \n" +"Salario base= $ "+(salarioEmpleado));    
        }
    }
)()