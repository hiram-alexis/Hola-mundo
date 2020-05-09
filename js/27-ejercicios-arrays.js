'use strict'

//Ejercicios sobre los temas de Arrays
/*
1.- Pida 6 numeros por pantalla y los meta en un array.
2.- Mostrar los elementos del array en el cuerpo de la 
pagina y en la consola.
3.- Ordenar el array y mostrarlo.
4.-Invertir el orden y mostrarlo.
5.- Mostrar cuantos elementos tiene el array
6.- Busqueda de un valor introducido por el usuario
y nos diga si esta y su posición.
*/

var numeros = new Array(6);

//Pedir 6 numeros al usuario
/*
for(var i = 0; i<=5; i++){
	numeros[i] = parseInt(prompt("Introduce un numero: ",0));
}
*/

//Otra forma de hacerlo 
var numeros = [];
for(var i = 0; i<=5; i++){
	numeros.push(parseInt(prompt("Introduce un numero: ",0)))
}
//Mostrarlo en el cuerpo de la paguina
document.write("<h1> Contenido del array </h1>");
numeros.forEach((numero, index) =>{
	document.write("<strong>"+numero+"</strong><br/>");
})
//Mostramos en consola
console.log(numeros);