'use strict'

//Funciones: Son un grupo de ordenes agrupados por un nombre en concreto.
//Una función es una agrupación reutilizable de un conjunto de instrucciones.

//defino la función
/*	
function calculadora(){
	//Le agrego el conjunto de instrucciones a ejecutar.
	//console.log("Hola soy la calculadora");
	//console.log("Si, soy yo");

 console.log("Suma: "+(10+15));

	return "Hola soy la calculadora!";
}
//invocar o llamar a la función
//calculadora();
var resultado = calculadora();

console.log(resultado);
*/

//PARAMETROS---------------------------------------------
//Son variables que alteran la lógica o el resoltado de la función
//abstraemos más de la lógica y hacemos más reutilizable una función.
function calculadora(numero1, numero2, mostrar = false){
	//Le agrego el conjunto de instrucciones a ejecutar.
	if (mostrar == false) {
			console.log("Suma: "+(numero1+numero2));
 			console.log("Resta: "+(numero1-numero2));
   			console.log("Multiplicaión: "+(numero1*numero2));
   			console.log("División: "+(numero1/numero2));
    		console.log("********************************************");


	}	else{
		 	document.write("Suma: "+(numero1+numero2)+"<br/>");
  			document.write("Resta: "+(numero1-numero2)+"<br/>");
   			document.write("Multiplicaión: "+(numero1*numero2)+"<br/>");
    		document.write("División: "+(numero1/numero2)+"<br/>");
    		document.write("********************************************"+"<br/>");


	}
	//return "Hola soy la calculadora!";
}
//invocar o llamar a la función
calculadora(1, 4);
calculadora(2, 5, true);
/*
calculadora(12, 8);
calculadora(98, 2);

for (var i = 1 - 1; i <= 10; i++) {
	console.log(i);
	calculadora(i, 8);
}
*/


