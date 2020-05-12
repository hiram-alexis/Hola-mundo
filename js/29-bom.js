'use strict'

//BOM Brouser Object Model Trabajar con herramientas del navegador web

function getBom(){
//console.log(window.innerWidth);	//Anchura de la ventana
//console.log(window.innerHeight);	//Altura de la ventana
console.log(screen.width);	//Accede a propiedades del navegador
console.log(screen.height);	
console.log(window.location); //Ver todos los datos de la pagina
//console.log(window.location.href); //Ver la URL que esta cargada
}
//Una funcion que redirecciona a cuarquier otra url
function redirect(url){
	window.location.href = url;
}

//Que no sabra una pequeña ventana del navegador

function abrirVentana (url){
	//window.open(url);	//De esta forma solo abre el url en otra pestaña
	window.open(url, "","width=600,height=400");	//De esta forma la abre en otra ventana
}
getBom(); 