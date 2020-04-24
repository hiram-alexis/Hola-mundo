'use strict'

//Funciones anonimas
//Una funcion que no tiene nombre
//Callbacks funcion dentro de otra funcion
/*
var pelicula = function (nombre){
	return "La pelicula es: "+nombre;
}
*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5,7, function(dato){
	console.log("La funcion es: ", dato)
},
dato => {
	console.log("La suma por dos es: ", dato*2)
}
);

/*
console.log(
	sumame(4,5)
	);
	*/

