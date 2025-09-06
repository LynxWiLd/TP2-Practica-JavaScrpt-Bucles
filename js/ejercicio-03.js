/*
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/
let cadena = "";
let resultado = "";

//confirm devuelve true si se pulsa Aceptar y false si se pulsa Cancelar
do {
  cadena = prompt("Introduce una cadena de texto");
    if (cadena) {
        if (resultado === "") {
            resultado = cadena;
        } else {
            resultado += "-" + cadena;
        }
    }
}
while (confirm("¿Quieres introducir otra cadena?"));

document.writeln(resultado);
