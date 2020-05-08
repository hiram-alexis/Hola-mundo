'use strict'

//Arrays dentro de otro array
// Primer array
var categorias = ["Accion", "Terror", "Comedia","Romance","Terror", "Suspenso"]; 
//Segundo array
var peliculas = ["La verdad duele", "La vida es buena", "Gran torino"]; 
//Array multidimencional
//peliculas.sort();//Acomoda el array de forma alfabetica
peliculas.reverse(); //Acomoda de manera contraria el Array
console.log(peliculas);	


var cine = [categorias, peliculas]; 
  /*
  Para mandar a llamar datos de nuestro 
  arreglo multidimencional en el primer parametro 
  escogemos cual array usaremos (0 que es el array 
  de categorias, y en el segundo parametro 
  (1 que es Terror) escogemos que valor queremos tomar. 
  */
//console.log(cine[0][1]); //El resultado sera: "Terror".
/*
En este otro ejemplo escogemos como primer parametro
el segundo array (1 que es peliculas) y como segundo
parametro escogemos el elemento 2 (que es "Gran torino")
*/
//console.log(cine[1][2]); //El resultado sera "Gran torino".
// Creamo una variable para introducir elementos
/*
var elemento = "";

//Crearemos un ciclo while para pedir mas elementos
do{
	elemento = prompt("Introduce tu pelicula: "); //Pide el elemento
peliculas.push(elemento);//Añade el elemento
}

while (elemento != "Acabar"); //Declara que si se introduce "Acabar" entonces el ciclo se cierra.
peliculas.pop(); //Eliminar el ultimo elemento de un array
//peliculas.push("Batman");	//Para introducir un nuevo elemento a un array.
*/
//Eliminar un elemento del array
var indice = peliculas.indexOf('Gran torino'); //creamos variable incice que mostrara en que posision esta el elemento descrito.
console.log(indice); //Lo mostramos en pantalla para ver cual es
if(indice > -1){
	peliculas.splice(indice,1); //Le decimos que borre 1 elemento
}

//Convertir un array a un texto
var peliculas_string = peliculas.join();
//convertir un texto a un aaray
var cadena = "Texto1, Texto2, Texto3"; //Creamos un array
var cadena_array = cadena.split(" , "); //Marcamos que cada elemento depues de: " , " , sera un elemento del array
console.log(cadena_array); //Mostrar e consola el arreglo.