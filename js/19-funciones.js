'use strict'

//Funciones: Son un grupo de ordenes agrupados por un nombre en concreto.
//Una función es una agrupación reutilizable de un conjunto de instrucciones.

//defino la cunción
function calculadora(){
	//Le agrego el conjunto de instrucciones a ejecutar.
	console.log("Hola soy la calculadora");
	console.log("Si, soy yo");
	
	return "Hola soy la calculadora!";
}
//invocar o llamar a la función
//calculadora();
var resultado = calculadora();

console.log(resultado);