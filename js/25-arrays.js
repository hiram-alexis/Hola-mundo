'use strict'

// Arrays, Arreglos, Matrices
//Es una coleccion de datos que puede tener una variable.

var nombre = "Alexo Sánchez"; //una variable normal
var nombres = ["Alexis Sánchez", "Vero Sama", "Sefora Sánchez"]; // Variable con array de nombres
			//		Posicion0		Posicion 1	Posicion 2
var lenguajes = new Array ("PHP","JS","Go","Java","C#","C","Pascal"); //Otra forma de declarar un Array
/*
console.log(nombres[0]); //Mandamos a llamar el primer elemento 
console.log(nombres.length); //Ver cuantos elementos hay en el Array

var elemento = parseInt(prompt("¿Que elemento del array quieres?",0));

//Creamos un if para que si el usuario ingresa un elemento qu eno existe, made una alerta.

if(elemento>=nombres.length){
	alert("El elemento es menor que: "+nombres.length);
}else{
	alert("El usuario seleccionado es: "+nombres[elemento]);
}
//alert(nombres[elemento]); //Sacar un elemento selecinoado por el usuario
*/
//Para llamar a todo el array
document.write("Lenguajes de programación del 2020");
//Creamos un bucle for
for (var i = 0; i < lenguajes.length; i++) {	//nuestra variable i comienza en 0, la condición es que mientras la variable sea menor que el último elemento, la variable valla aumentando uno.
	document.write("<li>"+lenguajes[i]+"</li>");
	}
	document.write("</ul>");