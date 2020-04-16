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