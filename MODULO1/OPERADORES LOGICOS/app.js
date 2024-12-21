let num1 = 18;
let num2 = 20;
let num3 = 40;
let num4 = 30;

let op = (num1<num3 && num3===num4) || (!(num1<num2) || (num3>num4));
document.write(op);

// el operador logico && es el Y, para que de true ambos deben ser verdaderos, si hay un false automaticamente da false y si los dos son false la operacion dara dalse;

// el operador logico || es el O, para que de true al menos uno de los operandos debe ser verdadero, si hay un true automaticamente da true y si los dos son true la operacion dara true;

// el operador logico ! es el not, esto convierte un retorno que es false en true y un true en false, ya que esto inivierte a los retornos