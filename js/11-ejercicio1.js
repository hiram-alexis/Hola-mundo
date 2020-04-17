'use strict'

/*
Programa qu epida dos numeros y que nos diga cual 
 el mayor, el menor y si son iguales.
 PLUS: Si los numeros no son un numero, o son iguales
 o menores a 0, entonces nos vuelva a pedir los numeros.
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

	while(numero1==0 || isNaN(numero1)){
	numero1 = parseInt(prompt("Introduce el primer numero", 0));
	}

	while(numero2 ==0 || isNaN(numero2)){
	numero2 = parseInt(prompt("Introduce el segundo numero", 0));
	}
	

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