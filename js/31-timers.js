'use strict'

window.addEventListener('load', function(){
//Timers
//Crear una funcion que nos devuelta la misma accion.
function intervalo(){
	//var tiempo = setTimeout (function(){	// Se ejecuta solo 1 vez en el tiempo que determinemos.
	var tiempo = setInterval (function(){	//Se repite como un bucle
		console.log("Set interval ejecutado");
		var encabezado = document.querySelector("h1");
		if (encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "30px";
		}else{
				encabezado.style.fontSize = "50px";
		}
		
	}, 1000);
	return tiempo;
}
var tiempo = intervalo();	
//Creamos un boton para detener el bucle.
		var stop = document.querySelector("#stop");

		stop.addEventListener("click", function(){
			alert("Has parado el intervalo en bucle");
			clearInterval(tiempo);
		});
			var start = document.querySelector("#start");
			start.addEventListener("click", function(){
				alert("Has iniciado el intervalo en bucle");
				intervalo();
			});
});

/*
En este ejemplo, al volver a dar click en stop nuevamente
el programa no detiene el bucle, univcamente manda la alerta
pero el bucle continua.
*/