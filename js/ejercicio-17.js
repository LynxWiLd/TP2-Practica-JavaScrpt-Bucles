/*Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo ------------- Output: la vocal ‘o’ está en la posición 1

*/

let texto = prompt("Ingrese un texto:");
let posicion = -1;
for (let i = 0; i < texto.length; i++) {
  let char = texto.charAt(i).toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    posicion = i+1;
    break;
  }
}
if (posicion !== -1) {
  document.writeln(
    "La primera vocal de " + texto + " está en la posición: " + posicion
  );
} else {
  document.writeln("No se encontraron vocales en el texto.");
}
