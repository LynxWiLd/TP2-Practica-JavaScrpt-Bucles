/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */
let numero = parseInt(prompt("Ingrese un número no mayor a 50:"));
while (isNaN(numero) || numero < 1 || numero > 50) {
    numero = parseInt(prompt("Entrada inválida. Por favor, ingrese un número no mayor a 50:"));
}
for (let i = 1; i <= numero; i++) { 
  let resultado = "";
  for (let j = 1; j <= i; j++) { 
    resultado += j;
  }
  document.writeln(resultado + "<br>");
}