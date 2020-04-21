'use strict'

//Tabla de multiplicar de un numero introducido por pantalla.
/*
var numero = parseInt(prompt("¿De que número quieres la tabla?",1));

document.write("<h1>Tabla del " + numero+"</h1>")
for (var i=1; i<=10; i++){
document.write(i+" x " + numero + " = " + (i*numero)+"<br/>");

}
*/

//Todas las tablas de multiplicar hasta el 10
for (var c=1; c<=10; c++){	//hace una numeración del 1 al 10

document.write("<h1>Tabla del " + c+"</h1>")
for (var i=1; i<=10; i++){	//Vuelve hacer la misma numeracioón
document.write(i+" x " + c + " = " + (i*c)+"<br/>"); //Realiza las tablas

	}
}