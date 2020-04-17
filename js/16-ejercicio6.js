'use strict'

/*
Que nos diga si un numero es par o inpar
1.- Ventana prompt
2.-Validar el número
3.-Mostrar resultado
*/

var number = parseInt(prompt("Introducir un numero", 0));

	while(isNaN(number)){
	number = parseInt(prompt("Introducir un numero", 0));	
	}
if (number%2 == 0) {
	alert("Es un numero Par");
} else {
	alert("Es inpar");
}
