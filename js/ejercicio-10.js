/*Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

const filas = parseInt(prompt("Ingrese el número de filas:"));
const columnas = parseInt(prompt("Ingrese el número de columnas:"));
const totalCeldas = filas * columnas;
let numero = totalCeldas;
document.writeln(`<table class="table striped-columns"><tbody>`);
for (let i = 0; i < filas; i++) {
  document.writeln(`<tr>`);
  for (let j = 0; j < columnas; j++) {
    document.writeln(`<td>` + numero + `</td>`);
    numero--;
  }
  document.writeln(`</tr>`);
}
document.writeln(`</table></tbody>`);
