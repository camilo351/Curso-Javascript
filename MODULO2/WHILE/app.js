let numero = 0;

// while (numero < 10) {
//     numero++;
//     document.write(numero + '<br>');
// }
//mientras la condicion sea verdadera el while va ser infinito, para que se detenga la condicion debe ser falsa

// do {
//     numero ++;
//     document.write(numero + '<br>');
// } while (
//     numero < 10
// );
// el do while se ejecuta al menos una vez y luego se evalua la condicion, si la condicion es verdadera se ejecuta el bloque de codigo y luego se repite el proceso hasta que la condicion de false

while (numero < 100){
    numero ++
    document.write(numero + '<br>');
    if (numero == 10){
        break;
    };
};