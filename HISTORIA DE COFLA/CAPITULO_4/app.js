//EJERCICIO 1

// class Calculadora {
//     constructor(){};
//     suma (num1,num2){
//         return parseInt(num1) + parseInt (num2);
//     };
//     resta (num1,num2){
//         return parseInt(num1) + parseInt (num2);
//     };
//     multiplicación (num1,num2){
//         return parseInt(num1) * parseInt (num2);
//     };
//     división (num1,num2){
//         return parseInt(num1) / parseInt (num2);
//     };
//     potenciación (num1,num2){
//         return parseInt(num1) ** parseInt (num2);
//     };
//     raicesCuadrada (num1){
//         return num1 = Math.sqrt(num1)
//     };
//     raicesCubicas(num1){
//         return num1 = Math.cbrt(num1)
//     }
// }

// const calculadora = new Calculadora();
// let operaciones = ['Suma', 'Resta', 'Multiplicación', 'División','Potenciación','Raiz cuadrada', 'Raiz cubica'];
// operaciones.forEach((opciones) => document.write(opciones + '<br>'));

// opcion = parseInt(prompt('Elije una opción: '));

// if (opcion == 1){
//     let numero1 = prompt('numero1: ');
//     let numero2 = prompt('numero2: ');
//     let resultado = calculadora.suma(numero1,numero2);
//     document.write (`el resultado de la suma es ${resultado}`);
// }
// else if (opcion == 2){
//     let numero1 = prompt('numero1: ');
//     let numero2 = prompt('numero2: ');
//     let resultado = calculadora.resta(numero1,numero2);
//     document.write (`el resultado de la resta es ${resultado}`);
// }
// else if (opcion == 3){
//     let numero1 = prompt('numero1: ');
//     let numero2 = prompt('numero2: ');
//     let resultado = calculadora.multiplicación(numero1,numero2);
//     document.write (`el resultado de la multiplicación es ${resultado}`);
// }
// else if (opcion == 4){
//     let numero1 = prompt('numero1: ');
//     let numero2 = prompt('numero2: ');
//     let resultado = calculadora.división(numero1,numero2);
//     document.write (`el resultado de la division es ${resultado}`);
// }
// else if (opcion == 5){
//     let numero1 = prompt('numero1: ');
//     let numero2 = prompt('numero2: ');
//     let resultado = calculadora.potenciación(numero1,numero2);
//     document.write (`el resultado de la potenciacion es ${resultado}`);
// }
// else if (opcion == 6){
//     let numero1 = prompt('numero1: ');
//     let resultado = calculadora.raicesCuadrada(numero1);
//     document.write (`el resultado de la raiz cuadrada es ${resultado}`);
// }
// else if (opcion == 6){
//     let numero1 = prompt('numero1: ');
//     let resultado = calculadora.raicesCubicas(numero1);
//     document.write (`el resultado de la raiz cuadrada es ${resultado}`);
// } 







//EJERCICIO 2;
// const obtenerInformacion = (materia) => {
//     materias = {
//         Matematicas: ['Hernandez','Camilo', 'Cofla','Nicole','Ronaldo'],
//         Programacion: ['Alex','Camilo', 'Cofla'],
//         Logica: ['Carlos','Nicole', 'Ronaldo', 'Camilo'],
//         Ingles: [ 'Mister','Camilo', 'Cofla','Nicole'],
//     };
//     if (materias[materia] !== undefined) {
//         return [materias[materia],materia,materias];
//     }
//     else{
//         return materias;
//     }
// };

// const mostrarInformacion = (materia)=> {
//     let informacion = obtenerInformacion(materia);
//     if (informacion !== false){
//         let profesor = informacion[0][0];
//         alumnos = informacion[0];
//         alumnos.shift();
//         document.write(`El profesor de <b>${informacion[1]}</b> es: <b>${profesor}</b><br> Los alumnos son: ${alumnos}<br><br>`);
//         };
// };

// const cantidadDeClases = (alumno)=>{
//     let informacion =  obtenerInformacion();
//     let clasesPresentes = []
//     let cantidadTotal = 0;
//     for (info in informacion){
//         if (informacion[info].includes(alumno)){
//             cantidadTotal++;
//             clasesPresentes.push(' ' + info);
//         };
//     };
//     return  `${alumno} esta en ${cantidadTotal} clases y esta cursando ${clasesPresentes}`;
// };

// mostrarInformacion('Programacion');
// mostrarInformacion('Logica');
// mostrarInformacion('Ingles');
// mostrarInformacion('Matematicas');
// document.write(cantidadDeClases('Cofla'));












//EJERCICIO 3

// let materias = {
//     Matematicas: ['Hernandez','Camilo', 'Cofla','Nicole','Ronaldo'],
//     Programacion: ['Alex','Camilo', 'Cofla'],
//     Logica: ['Carlos','Nicole', 'Ronaldo', 'Camilo'],
//     Ingles: [ 'Mister','Camilo', 'Cofla','Nicole'],
//     };


// const inscribir = (alumno, materia) => {
//     personas = materias[materia];
//     alumnos = personas;
//     if (personas.length >= 21){
//         document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas`)
//     }
//     else{
//         personas.push(alumno)
//         if (materia == 'Matematicas'){
//             materias = {
//                 Matematicas: personas,
//                 Programacion: materias ['Programacion'],
//                 Logica: materias ['Logica'],
//                 Ingles: materias ['Ingles']
//                 };
//         }
//         else if (materia == 'Programacion'){
//             materias = {
//                 Matematicas: materias['Matematicas'],
//                 Programacion: personas,
//                 Logica: materias['Logica'],
//                 Ingles: materias['Ingles']
//                 };
//         }
//         else if (materia == 'Logica') {
//             materias = {
//                 Matematicas: materias['Matematicas'],
//                 Programacion: materias['Programacion'],
//                 Logica: personas,
//                 Ingles: materias['Ingles']
//                 };
//         }
//         else if (materia == 'Ingles'){
//             materias = {
//                 Matematicas: materias['Matematicas'],
//                 Programacion: materias['Programacion'],
//                 Logica: materias['Logica'],
//                 Ingles: personas
//                 };
//         }
//         document.write (`Felicidades ${alumno} te has inscrito a ${materia} correctamente` + '<br>')
//     }
// };

// document.write(materias['Matematicas'] + '<br>')
// inscribir('a cerra', 'Matematicas');
// document.write(materias['Matematicas'] + '<br>')










//EJERCICIO 4

// class CadenaTexto {
//     constructor (texto){
//         this.texto = texto;
//         this.convertidorMayuscula = false;
//     };


//     longitud(){
//         return this.texto.length
//     };


//     convertirMayusculas(){
//         if (!this.convertidorMayuscula){
//             this.texto = this.texto.toUpperCase();
//             document.write(`La palabra se convirtio exitosaente a mayuscula ${this.texto} <br>`);
//             this.convertidorMayuscula = true;
//         } 
//         else{
//             document.write( `La palabara ${this.texto} ya se encuentra en mayuscula <br>`);
//         };
//     };


//     convertirMinuscula(){
//         if (this.convertidorMayuscula){
//             this.texto = this.texto.toLowerCase()
//             document.write( `La palabra ${this.texto} queda de esta manera ${this.texto} <br>`);
//             this.convertidorMayuscula = false;
//         }
//         else {
//             document.write( `La palabara ${this.texto} ya se encuentra en minuscula`);
//         }
//     };

//     revertir(){
//         return this.texto.split(' ').reverse().join(' ')
//     }

// }

// texto1 = new CadenaTexto('santiago de gusta Karla');
// texto1.convertirMayusculas();
// texto1.convertirMayusculas();
// texto1.convertirMinuscula();
// document.write(texto1.revertir());








//EJERCICIO 5

// class ListaTareas{
//     constructor(){
//         this.tareas = [];
//     };
//     agregarTarea(descripcion){
//         const agregar = {
//             descripcion: descripcion,
//             completada: false
//         };
//         this.tareas.push(agregar);
//         document.write(`Tarea agregada "${descripcion}" <br>`)
//     };

//     eliminarTarea(descripcion){
//         const indice = this.tareas.findIndex(tarea => tarea.descripcion === descripcion);
//         if (indice !== -1){
//             this.tareas.splice(indice,1);
//             document.write(`Tarea Eliminada "${descripcion}" <br>`)
//         }
//         else{
//             document.write(`Tarea no encontrada "${descripcion}" <br>`)
//         };
//     };

//     mostrarTarea(){
//         if (this.tareas.length === 0){
//             document.write('No hay tareas asiganadas');
//         }
//         else{
//             document.write(`<b> LISTA DE TAREAS</b><br><br>`)
//             this.tareas.forEach((tarea, index) => {
//                 const estado = tarea.completada ? '✔ completada': '✘ Pendiente';
//                 document.write(`${index + 1}. ${tarea.descripcion} = ${estado} <br>`);
//             });
//         };
//     }

//     marcarTarea(descripcion){
//         const tarea = this.tareas.find(tarea => tarea.descripcion === descripcion);
//         if (tarea){
//             tarea.completada = true;
//             console.log(`Tarea completada: "${descripcion}"<br>`)
//         }
//         else{
//             console.log(`Tarea no encontrada "${descripcion}"<br>`)
//         }
//     }

// };

// listatarea1 = new ListaTareas();
// listatarea1.agregarTarea('Dormir temprano');
// listatarea1.agregarTarea('Cocinar');
// listatarea1.agregarTarea('Hacer Deporte');
// listatarea1.marcarTarea('Cocinar')
// listatarea1.mostrarTarea();



