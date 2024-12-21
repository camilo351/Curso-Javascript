// class animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.informacion = `Hola soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     verInformacion() {
//         document.write(this.informacion + '<br>');
//     }
// }

// let perro = new animal('perro', 8, 'cafe');
// let gato = new animal('gato', 3, 'amarillo');
// let pajaro = new animal('pajaro', 3, 'azul');
// perro.verInformacion();
// gato.verInformacion();
// pajaro.verInformacion();

//EJERCICIO 2
// class Jugador {
//     constructor(nombre, edad, dorsal){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.dorsal = dorsal;
//     }
//     imprimirInformacion() {
//         document.write(`Nombre: ${this.nombre}, Edad: ${this.edad}, Dorsal: ${this.dorsal}<br>`);
//     }
// }

// class Cr7 extends Jugador{
//     constructor(nombre, edad, dorsal, club){
//         super(nombre, edad, dorsal);
//         this.club = club;
//     };
//     imprimirInformacion(){
//         super.imprimirInformacion();
//         document.write(`Club: ${this.club}<br>`);
//     }

//     MeterGoles(){
//         alert(`${this.nombre} metio un hacktick`)
//     };
// }

// class Messi extends Jugador{
//     constructor(nombre, edad, dorsal, club){
//         super(nombre,edad,dorsal)
//         this.club = club;
//     }
//     imprimirInformacion(){
//         super.imprimirInformacion();
//         document.write(`Club ${this.club}<br>`)
//     }
//     Mundial(){
//         document.write(`Florentino y la FIFA me regalaron un mundial`)
//     }

// }

// let cristiano = new Cr7('Cristiano',39,7,'real madrid');
// cristiano.imprimirInformacion();
// cristiano.MeterGoles();
// let messi = new Messi('Messi', 36, 10, 'Inter Regala mundiales de clubes');
// messi.imprimirInformacion();
// messi.Mundial();

//EJERCICIO 3