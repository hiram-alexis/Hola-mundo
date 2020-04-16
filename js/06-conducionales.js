'use strict'

//Condicionales IF
//Si A es igual a B entonces haz algo

/*	Tipos de operadores relacionales
	Mayor: >
	Menor: <
	mayor o igual: >=
	menor o igual: <=
	igual: ==
	distinto: !=
*/
/* Ejemplo 1
var edad1 = 30;
var edad2 = 12;

//si pasa esto
if (edad1 > edad2) {
	//Ejecuta esto
	console.log("Edad uno es mayor que edad dos");
} else {
	console.log("La edad uno es inferior");
}
*/


var edad = 19;
var nombre = "Alexis Sanchez";

if (edad >= 18) {
	//Es mayor de edad
	console.log(nombre+" tiene "+edad+ " años, es MAYOR de edad.");
//Segundo if
if (edad <= 33) {
	console.log("Todavia eres milenial");
}else if (edad >= 70) {	//Segundo else
	console.log("Eres anciano");
} else {
	console.log("Ya no eres milenial");
}	//Fin del primer else if
	
} else {	//Else del primer if
	//Es menor de edad
console.log(nombre+" tiene "+edad+ " años, es MENOR de edad.");	
}
/*
AND(Y): &&
OR(O): ||
NEGACION: !
*/

//Negación
var year = 2038;
if (year != 2016) {
	console.log("El año no es 2016 realmente es: "+year);
}

//AND
if (year >= 2000 && year<= 2020) {
	console.log("Estamos en la era actual");
} else {
	console.log("Estamos en la era post moderna");
}

//OR
if (year == 2008 || (year >= 2018 && year ==2028)) {
	console.log("El año acaba en 8");
} else {
	console.log("Año no registrado");
}