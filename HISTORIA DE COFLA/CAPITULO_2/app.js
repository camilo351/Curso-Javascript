//EJERCICIO 1

// let free = false;
// const validarCliente = (time)=>{
//     let edad = prompt('¿Cual es tu edad?');
//     if (edad >= 18){
//         if(time >=2 && time <7 && free == false){
//             alert('puedes acceder a la fiesta totalmente gratis');
//             free = true;
//         }
//         else{
//             alert('no puedes acceder a la fiesta sin pagar ');
//         }
//     } 
//     else{
//         alert('no puedes acceder a la fiesta');
//     };
// }
// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(2);


//EJERCICIO 2

// let cantidad = prompt('¿cuantos alumnos son?');
// let alumnosTotales = [];

// for (i = 0; i<cantidad; i++){
//     alumnosTotales[i] = [prompt('Nombre del alumnos:' + (i + 1 )), 0];
// };

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == 'p' || presencia == 'P'){
//         alumnosTotales[p][1]++;
//     };
// };

// for (i = 0; i <30; i++){
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     };
// };

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}: <br>
//     __________Asistencia: ${alumnosTotales[alumno][1]} <br> <br>
//     __________Fallas: ${30 - alumnosTotales[alumno][1]}`;
//     if (30 - alumnosTotales[alumno][1] > 18){
//         resultado += 'REPROBADO POR FALLAS <br>'
//     };
//     document.write(resultado + '<br>' );
// };

//EJERCICIO 3
const suma = (num1,num2)=>num1+num2;
const resta = (num1,num2)=>num1-num2;
const multiplicar = (num1,num2)=>num1*num2;
const dividir = (num1,num2)=>num1/num2;

alert('1.suma, 2.resta, 3.multiplicar,4.dividir')
const calculadora = (opcion)=>{
    let numero1 = parseInt(prompt('Escriba el primer numero: '));
    let numero2 = parseInt(prompt('Escriba el segundo numero: '));
    if (opcion == 1){
        let resultado = suma(numero1, numero2);
        alert(`El resultado de la suma es: ${resultado}`);
    }
    else if (opcion == 2){
        let resultado = resta(numero1, numero2);
        alert(`El resultado de la suma es: ${resultado}`);
    } 
    else if (opcion == 3){
        let resultado = multiplicar(numero1, numero2);
        alert(`El resultado de la suma es: ${resultado}`);
    } 
    else if (opcion == 4){
        let resultado = dividir(numero1, numero2);
        alert(`El resultado de la suma es: ${resultado}`);
    }  
    else{
        alert('La opcion ingresada no es valida');
    }
};

calculadora(parseInt(prompt('Elija una opcion: ')));