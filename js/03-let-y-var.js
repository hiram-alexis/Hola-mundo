'use strict'

//Pruebas con let y var

//prueba con var
var numero = 40;
console.log(numero); //valor 40

if (true) {
 	var numero = 50;
 	console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con let
var texto = "curso JS Alexis"
console.log(texto);

if (true) {
	let texto = "Curso let Alexis";
	console.log(texto);
}

console.log(texto);