let nombre = prompt('Dijite su nombre: ');

if (nombre == 'santiago'){
    document.write(`${nombre} es caga`);
}
else if (nombre == 'camilo'){
    document.write(`${nombre} es el mejor`);
}
else {
    document.write(`${nombre} es un nombre genial`);
}

// if es la primera condicional
// else if es una condicional que si la primera condicional no es verdadera entonces se ejecutara la segunda
// else es una condicional que si ninguna de las anteriores es verdadera entonces se ejeucatar el else