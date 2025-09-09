/*Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

*/

const nombre1 = prompt("Ingrese el primer nombre:");
const edad1 = parseInt(prompt("Ingrese la edad de " + nombre1 + ":"));
const nombre2 = prompt("Ingrese el segundo nombre:");
const edad2 = parseInt(prompt("Ingrese la edad de " + nombre2 + ":"));
const nombre3 = prompt("Ingrese el tercer nombre:");
const edad3 = parseInt(prompt("Ingrese la edad de " + nombre3 + ":"));
let nombreMayor;
let edadMayor;
if (edad1 > edad2 && edad1 > edad3) {
    nombreMayor = nombre1;
    edadMayor = edad1;
} else if (edad2 > edad1 && edad2 > edad3) {
    nombreMayor = nombre2;
    edadMayor = edad2;
} else if (edad3 > edad1 && edad3 > edad2) {
    nombreMayor = nombre3;
    edadMayor = edad3;
} else {
    nombreMayor = "Hay dos o más personas con la misma edad mayor.";
    edadMayor = Math.max(edad1, edad2, edad3);
}
document.writeln("El nombre del mayor es: " + nombreMayor + " con " + edadMayor + " años.");
