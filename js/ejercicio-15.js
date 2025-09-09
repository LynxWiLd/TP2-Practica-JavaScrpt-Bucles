/*Realiza un script que cuente el número de vocales que tiene un texto.
 */
let texto = prompt("Ingrese un texto:");
let contadorVocales = 0;
for (let i = 0; i < texto.length; i++) {
  let char = texto.charAt(i).toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    contadorVocales++;
  }
}
document.writeln("El texto ingresado tiene " + contadorVocales + " vocales.");
