'use strict'

//Transformacion de textos de variables

var numero = 444;
var texto1 = "Bienvenido al curso JavaScript";
var texto2 = " Es un buen curso";

var dato = numero.toString();
	//dato = texto1.toUpperCase(); //Convertir a mayusculas.
	dato = texto1.toLowerCase();	//Convertir a minusculas

 console.log (dato);


 //Calcular longitud
 var nombre =" Alexis Sánchez";
 	nombre = ["Hola", "hola"];

 console.log(nombre.length); //Contar cuantas valiables la cantidad de datos

 //Concatenar- unir textos

 //var textoTotal = texto1 + texto2; // Unir textos.
 
var textoTotal = texto1.concat (""+texto2); //concatenar textos
 console.log(textoTotal);