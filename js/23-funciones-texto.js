'use strict'

//Transformacion de textos de variables

var numero = 444;
var texto1 = "Bienvenido al curso JavaScript, curso valioso";
var texto2 = " Es un buen curso";
/*
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
 */

 //var busqueda = texto1.indexOf("curso");//La primera vez que aparece la palabra
 //var busqueda = texto1.lastIndexOf("curso"); //Ultima vez que aparece la palabra
 //var busqueda = texto1.search("curso");
//var busqueda = texto1.match(/curso/g); //nos arroja un array con cuanto se repite.
//var busqueda = texto1.substr(14,5);// para que la busqueda de a partir del caractec 14 y de el numero de caracteres que pida
//var busqueda = texto1.charAt(22); //una letra en una posicion especifica
//var busqueda = texto1.startsWith("Bienvenido");//nos va a decir si esta la palabra en el inicio.
//var busqueda = texto1.endsWith("valioso");//nos va a decir si esta la palabra en el final.
var busqueda = texto1.includes("JavaScript");//nos va a decir si esta la palabra en el final.

 console.log(busqueda);	//otra forma igual a la primera de hacer busqueda de texto.