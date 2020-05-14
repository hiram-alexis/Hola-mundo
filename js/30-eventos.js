'use strict'

//Eventos, una funcion que se ejecuta cuando sucede alho
//Eventos del ratón

//Evento load
window.addEventListener('load', ()=>{
		function cambiarColor(){
			var bg =boton.style.background;
			if (bg == "green") {
				boton.style.background = "blue";

			}else{
				boton.style.background = "green";
			}

				boton.style.padding = "10px";
				boton.style.border = "1ox solid #cc";

			return true;
		}
		var boton = document.querySelector("#boton");
		//Click
		boton.addEventListener('click', function(){
				cambiarColor();
		});

		//Mouse over, pasar el raton por encima

		boton.addEventListener('mouseover', function(){
			boton.style.background ="yellow";
		});

		//Mouse out
		boton.addEventListener('mouseout', function(){
			boton.style.background ="brown";
		});

		//Focus
		var input = document.querySelector("#campo_nombre"); 

		input.addEventListener('focus', function(){
			console.log("[focus] Estas dentro del input");
		});

		//Blur
		input.addEventListener('blur', function(){
			console.log("[blur] Estas fuera del input");
		});
		//Keydown
		input.addEventListener('keydown', function(event){
			console.log("[keydown] Pulsando esta tecla", String.fromCharCode(event.keyCode));

		});
		//Keypress
		input.addEventListener('keypress', function(event){
			console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));

		});
		//Keyup
		input.addEventListener('keyup', function(event){
			console.log("[keypress] Tecla soltada", String.fromCharCode(event.keyCode));
		});

});