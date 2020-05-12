'use strict'

//Eventos, una funcion que se ejecuta cuando sucede alho
//Eventos del ratón
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
