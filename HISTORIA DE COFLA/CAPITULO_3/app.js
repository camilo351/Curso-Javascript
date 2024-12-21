//EJERCICIO 1

// class Celular {
//     constructor (color, peso, tamaño, rdc, ram){
//         this.color = color;
//         this.peso = peso;
//         this.tamaño = tamaño;
//         this.resolucionDeCamara = rdc;
//         this.ram = ram;
//         this.encendido = false;
//     }
//     presionarBotonEncender(){
//         if ( this.encendido == false){
//             alert('Celular prendido');
//             this.encendido = true;
//         } else {
//             alert('Celular apagado');
//             this.encendido = false;
//         }
//     };

//     reiniciar(){
//         if (this.encendido == true){
//             alert('celular reiniciado');
//         } else {
//             alert('El celular no se encuentra encendido')
//         }
//     };

//     tomarFoto(){
//         if (this.encendido == true){
//             alert(`Tomando foto en una resolcuion ${this.resolucionDeCamara}`);
//         } else {
//             alert('El celular no se encuentra encendido')
//         }
//     };

//     tomarVideo(){
//         if (this.encendido == true){
//             alert(`Tomando video en una resolucion${this.resolucionDeCamara}`);
//         }else{
//             alert('el celular no esta encendido');
//         }
//     };

//     mobileInfo(){
//         return `
//         Color: ${this.color} <br>
//         Peso: ${this.peso} <br>
//         Tamaño: ${this.tamaño} <br>
//         Resolucion de cámara: ${this.resolucionDeCamara} <br>
//         RAM: ${this.ram} <br> 
//         `;
//     }
// };

// class CelularAltaGama extends Celular {
//     constructor(color, peso, tamaño, rdc, ram, rdce){
//         super(color,peso,tamaño,rdc,ram);
//         this.resolucionCamaraExtra = rdce;
//     }

//     grabarCamaraLenta(){
//         if (this.encendido==true){
//             alert(`Grabando en una camara lenta con la resolucion de ${this.grabarCamaraLenta}`)
//         }else{
//             alert('El celular no se encuentra encendido')
//         }
//     };

//     reconocimientoFacial(){
//         if (this.encendido == true){
//             alert('Activando reconocimiento facial');
//         }else{
//             alert('El celular no se encuentra encendido')
//         }
//     };
    
//     mobileInfoAltaGama(){
//         return this.mobileInfo() +`Resolucion de camara extra: ${this.resolucionCamaraExtra}` + '<br>'; 
//     };
// };

// const celular1 = new Celular('rojo','120g','5p','hd', '2GB');
// const celular2 = new Celular('negro','100g','8p','full-hd', '1GB');
// const celular3 = new Celular('verde','150g','3p','hd', '2GB');

// document.write(`
//     Celular1: <br> ${celular1.mobileInfo()} <br>
//     Celular2: <br> ${celular2.mobileInfo()} <br>
//     Celular3: <br> ${celular3.mobileInfo()} <br> 
//     `); 


// const Celular4 = new CelularAltaGama('Azul','100g','6p', 'full-hd','8GB', 'Full-4K');
// const Celular5 = new CelularAltaGama('Rosa','150g','7p', 'full-4k','10GB', 'Full-4K');

// document.write(`
//     Celular4: <br> ${Celular4.mobileInfoAltaGama()} <br>
//     Celular5: <br> ${Celular5.mobileInfoAltaGama()} <br> 
//     `);








//EJERCICIO 2
// class App {
//     constructor (cantidadDescargas, puntuación, peso ){
//         this.cantidadDescarga = cantidadDescargas;
//         this.puntuación = puntuación;
//         this.peso = peso;
//         this.instalado = false;
//         this.abrir = false;
//     }


//     instalar (){
//         if (this.instalado == false){
//             alert('Aplicacion instalada')
//             this.instalado = true;
//         }
//     };

//     desinstalar(){
//         if(this.instalado == true){
//             alert('Aplicacion desinstaladas')
//             this.instalado = false;
//         }
//     };

//     abrirAplicacion(){
//         if (this.abrir == false && this.instalado == true){
//             alert('Aplicacion abierta');
//             this.abrir = true;
//         }
//     };

//     cerrarAplicacion (){
//         if(this.abrir == true  && this.instalado == true){
//             alert('Aplicacion cerrada');
//             this.abrir = false;
//         }
//     };

//     infoApp(){
//         return `
//         Descargas: ${this.cantidadDescarga} <br>
//         puntuacion: ${this.puntuación} <br>
//         peso: ${this.peso} <br> <br>`
//     }
// }

// const app1 = new App(100, 4.3, '100mb');
// const app2 = new App(1000, 4.3, '1G');
// const app3 = new App(15, 4.3, '430mb');
// const app4 = new App(14340, 4.3, '10G');
// const app5 = new App(1434100, 4.3, '14200mb');
// const app6 = new App(10345, 4.3, '10430mb');
// const app7 = new App(2454234, 4.3, '1040mb');

// // app1.instalar();
// // app1.abrirAplicacion();
// // app1.cerrarAplicacion()
// document.write(app1.infoApp());
// document.write(app2.infoApp());
// document.write(app3.infoApp());
// document.write(app4.infoApp());
// document.write(app5.infoApp());
// document.write(app6.infoApp());
// document.write(app7.infoApp());







//EJERCICIO 3

//ANIMAL
// class Animal {
//     constructor(especie, color, tamaño, sexo){
//         this.especie = especie;
//         this.color = color;
//         this.tamaño = tamaño;
//         this.sexo = sexo;
//     }
//     infoAnimal(){
//         return`
//         Especie: ${this.especie}<br>
//         Color: ${this.color}<br>
//         Tamaño: ${this.tamaño}<br>
//         Sexo: ${this.sexo}` + '<br>' + '<br>'
//     };
// };

// //PERRO
// class Perro extends Animal{
//     constructor(especie,color,tamaño,sexo){
//         super(especie,color,tamaño,sexo);
//         this.sonido = false;
//     };

//     hacerSonido(){
//         if (this.sonido == false){
//             alert('Wua');
//             this.sonido = true;
//         }else{
//             alert('El perro no esta haciendo sonido')
//             this.sonido = false;
//         };
//     };
// };

// //GATO
// class Gato extends Animal{
//     constructor(especie,color,tamaño,sexo){
//         super(especie,color,tamaño,sexo);
//         this.sonido = false;
//     };

//     hacerSonido(){
//         if (this.sonido == false){
//             alert('Miau');
//             this.sonido = true;
//         }else{
//             alert('El gato no esta haciendo sonido')
//             this.sonido = false;
//         };
//     };
// };


// //creando un perro
// const perro1 = new Perro ('Labrador', 'Negro', '1m','macho');
// perro1.hacerSonido()
// document.write(perro1.infoAnimal());


// //creando un gato
// const gato1 = new Gato('Egipcio', 'beige', '40cm', 'hembra');
// gato1.hacerSonido()
// document.write(gato1.infoAnimal());







//Ejercicio 4

//CLASE PERSONA
// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     };
//     saludar(){
//         return `Hola, mi nombre es ${this.nombre}. ¿Cómo te encuentras el día de hoy?`;
//     };
// };

// //CLASE ESTUDIANTE
// class Estudiante extends Persona{
//     constructor(nombre,edad,curso){
//         super(nombre,edad);
//         this.curso = curso;
//     };
//     estudiar(){
//         return this.saludar() + `, yo me encuentro etudiando ${this.curso}`
//     };
// };

// //LLAMADA DE LAS CLASES
// estudiante1 = new Estudiante ('Camilo', 18, 'Programacion de software');
// alert(estudiante1.estudiar())







//EJERCICIO 5

// class Vehiculo {
//     constructor(marca, modelo, anio){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.anio = anio;
//     };
//     detalles(){
//         return `Marca: ${this.marca} <br>
//         Modelo: ${this.modelo} <br>
//         Año: ${this.anio} <br>`;
//     };
// };

// class Auto extends Vehiculo {
//     constructor(marca, modelo, anio, puertas){
//         super(marca, modelo, anio );
//         this.puertas = puertas;
//     };
//     detallesAuto(){
//         return this.detalles() + `Puertas: ${this.puertas} <br> <br>`
//     };
// };

// class Moto extends Vehiculo {
//     constructor(marca, modelo, anio, tipoDeManillar){
//         super(marca, modelo, anio );
//         this.tipoDeManillar = tipoDeManillar;
//     };
//     detallesMoto(){
//         return this.detalles() + `tipo de manillar: ${this.puertas} <br> <br>`
//     };
// };

// const auto1 = new Auto('Ford', 'Mustang', 2021, 4);
// document.write(auto1.detallesAuto());

// const moto1 = new Moto('Yamaha', 'YZF R1', 2020, 'Mecánica');
// document.write(moto1.detallesMoto());






//EJERCICIO 6

// CLASE CUENTA BANCARIA
class cuentaBancaria {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    };

    depositar(cantidad){
        let cantidadDepositar = parseInt(prompt('Deposito: '));
        cantidad = cantidadDepositar;
        let total = this.saldo + cantidad
        return total;
    };

    retirar(cantidad){
        let cantidadRetirar = parseInt(prompt('Retirar: '));
        if (cantidadRetirar > this.depositar){
            alert('no puedes retirar mas de lo que tienes')
        }else{
            cantidad = cantidadRetirar;
            return  this.saldo - cantidad;
        }
    }
}

const cuenta1 = new cuentaBancaria('camilo', 1000);
document.write(cuenta1.depositar())
document.write(cuenta1.retirar())



