// let animales = ['Perro', 'Gato', 'Leon', 'Murcielago'];
// let modificandoAnimal = animales.push('Pajaro', 'Iguana');
// let reverseAnimal = animales.splice(-1,1,'Dokine')
// document.write(animales);

// METODOS DE TRANFORMACION EN UN ARRAY

//el metodo pop elimina el ultimo elemento de un array y lo devuelve;

//el metodo shift elimina el primer elemento de un elemento y lo devuelve;

//el metodo push agrega uno o mas elementos al final de un array;

//el metodo reverse invierte los elementos de los arrays el primero termina siendo el ultimo y el ultimo el primero;

//el metodo unshift agrega uno o mas elementos al principio de un array;

//el metodo sort ordena los arrays en orden lexicografico, las mayusculas van a ir antes que las minusculas y los numeros antes que las mayusculas;

//el metodo splice cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos los parametros son el indice donde comenzara a cambiar el array (0 el primer elemento, -1 el ultimo elemento),si deseas eliminar elementos debes poner el numero de elementos que deseas eliminar y si tambien deseas agregar elementos debes escribir lo que pondras. Todo se separa por comas






// let nombre = ['Camilo', 'Nicole', 'Mario'];
// document.write(nombre + '<br>');
// let resultado1 = nombre.slice(0,2);
// document.write(resultado1);


//METODOS ACCESORES EN UN ARRAY

// el metodo join convierte un array en un string ademas podemos separar los elementos con el string que querramos

// el metodo slice devuelve una copia de una parte del array en un nuevo array los parametros son indice donde empieza la extracción y el indice donde termina la extraccion, siempre devolvera hasta un indice antes de donde le indicamos, si le indicamos -1 empezara de atras hacia adelante










// let paises = ['Colombia', 'Francia', 'Alemania', 'Italia', 'Bulgaria', 'Chexkolovaquia', 'Brasil'];
// let resultado = paises.includes('Colombia');
// document.write(resultado)

//METODOS YA VISTOS EN METODOS PARA CADENAS

// el metodo includes busca un parametro en un array y si lo encuntra devuelve true, sino false

//el metodo indexOf nos devulelve el indice del parametro que buscamos

// lastIndexOf nos devuelve el indice del ultimo elemento si hay elementos repetidos, ademas sino encuntra nada devolvera -1











let jugadores = ['Ronaldo','Messi','Neymar','Maldini','Romario','Toti','Zidane'];
let resultado = jugadores.filter((jugador) => jugador.length >= 5);
document.write(jugadores + '<br>');
document.write(resultado);

//METODOS DE REPETICIÓN

//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada ademas esto ejucuta la funcion una vez por cada elemento del array y nos devuelve un array nuevo solo con los elementos que cumplieron la condicion.

//El método forEach() ejecuta la función indicada una vez por cada elemento del array
