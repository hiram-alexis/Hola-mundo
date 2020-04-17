'use strict'

/*
Programa qu epida dos numeros y que nos diga cual 
 el mayor, el menor y si son iguales.
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

console.log(numero2, numero1);

if (numero1 == numero2) {
	alert("Los numeros son iguales");
} else if (numero1 > numero2){
	alert("El numero mayor es: "+ numero1);
	alert("El numero menor es: "+ numero2);
} else if (numero2 > numero1) {
	alert("El numero mayor es: "+ numero2);
	alert("El numero menor es: "+ numero1);
} else {
	alert("Introduce numeros correctos");
}