'use strict'

function HolaMundo(texto){
	var hola_mundo = "Texto dentro de funcion";
	console.log(texto);//desde dentro si se puede llamar variables de fuera de la función.
	console.log(numero.toString()); //Coonvertir un dato a un String
	console.log(hola_mundo);//Se pueden llamar variables de dentro de la funcion 

}
var numero = 12;
var texto = "Hola mundo soy una variable global";
HolaMundo(texto);

//console.log(hola_mundo);  //No se puede llamar desde fuera una variable que esta dentro de una funcion