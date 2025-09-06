/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let numero = 0;
let suma = 0;
let contador = 0;

do {
  numero = prompt("Introduce un número");
  if (numero) {
    if (isNaN(numero)) {
      alert("No es un número");
    } else {
      suma += parseFloat(numero);
      contador++;
    }
  }
} while (confirm("¿Quieres introducir un número?"));

document.writeln(
  "La suma total de los " + contador + " números introducidos es: " + suma
);
