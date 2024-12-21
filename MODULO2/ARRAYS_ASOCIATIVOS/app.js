let pc1= {
    nombre:'PCCAMILO',
    procesador:'Intel core 17',
    ram: '16GB',
    espacio: '1TB'
};

let nombre = pc1['nombre'];
let procesador = pc1['procesador'];
let ram = pc1['ram']
let espacio = pc1['espacio']

let frase = `
            El nombre de mi pc es: <b>${nombre}</b> <br>  
            Procesador: <b>${procesador}</b> <br>
            RAM: <b>${ram}</b> <br>
            Espacio: <b>${espacio}</b>`

document.write(frase);