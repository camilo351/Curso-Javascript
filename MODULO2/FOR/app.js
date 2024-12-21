// for (let i = 0; i <= 10; i++ ){ 
//     document.write(i + '<br>');
// };
// En un for primero se declara e inicializa, luego se hace la condicion y por ultimo la iteración;

// EJERCICIO
// numero = parseInt(prompt('Numero: '));
// for (let i=130; i <=10; i++){
//     let operacion = i * numero;
//     document.write(`${numero} x ${i} = ${operacion}`+ '<br>' );
// };

// let animales = ['Perro','Gato', 'Leon'];
// for (let animal in animales){
//     document.write(`${animal}: ${animales[animal]}` + '<br>');
// };
//nos muestra el idice donde se encuentra cada elemento

// document.write('<br>');

// for (let animal of animales){
//     document.write(animal + '<br>');
// };
//nos muestra el valor del elemento en el array



// let array1 = ['Camilo', 'Sofia', 'Santiago', 'Nicole'];
// let array2 = ['Michel', 'Ronaldo', array1, 'Melany'];

// arrayCamilo:
// for (let array in array2){
//     if (array == 2){
//         for (let array of array1){
//             document.write(array + '<br>');
//             break arrayCamilo;
//         }
//     }else {
//         document.write(`${array2[array]} `+ '<br>');
//     };
// };

// el Label es el Nombre que le demos al for en este ejercicio es arrayCamilo, este es el bloque principal y si queremos cortar elm array cuando llegue a la posicion 2, entonces le debemos de dar break y el nombre del bloque principal;

// let i = 0;
// let j = 0;
// checkiandj: while (i < 4) {
//     document.write(i + "<br>");
//     i += 1;
//     checkj: while (j > 4) {
//         document.write(j + "<br>");
//         j -= 1;
//         if (j % 2 == 0) continue checkj;
//         document.write(j + " is odd.<br>");
//     };
//     document.write("i = " + i + "<br>");
//     document.write("j = " + j + "<br>");
// }
