'use strict'

//Arrays dentro de otro array
// Primer array
var categorias = ["Accion", "Terror", "Comedia","Romance","Terror", "Suspenso"]; 
//Segundo array
var peliculas = ["La verdad duele", "La vida es buena", "Gran torino"]; 
//Array multidimencional
var cine = [categorias, peliculas]; 
  /*
  Para mandar a llamar datos de nuestro 
  arreglo multidimencional en el primer parametro 
  escogemos cual array usaremos (0 que es el array 
  de categorias, y en el segundo parametro 
  (1 que es Terror) escogemos que valor queremos tomar. 
  */
console.log(cine[0][1]); //El resultado sera: "Terror".
/*
En este otro ejemplo escogemos como primer parametro
el segundo array (1 que es peliculas) y como segundo
parametro escogemos el elemento 2 (que es "Gran torino")
*/
console.log(cine[1][2]); //El resultado sera "Gran torino".
