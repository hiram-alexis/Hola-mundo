'use strict'

//DOM-Document Objet Model

function cambiaColor (color){
	caja.style.background = color;
}

//Coseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); 

caja.innerHTML ="¡Texto en la caja desde js!";

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2"; 
//console.log(caja);

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
//var contenidoEnTexto = todosLosDivs[2].textContent;
//todosLosDivs.forEach((valor, indice)=>{
var seccion = document.querySelector("#miseccion");

var hr =document.createElement("hr");


var valor;
for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}
	
}
seccion.append(hr);

//})

//console.log(contenidoEnTexto);
//Conseguir elementos por su clase

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
/*
divsRojos.style.background = "red"; //No se puede hacer de manera gloval por ser varios
divsRojos[0].style.background = "blue"; //Para que funciones se selecciona un indice
divsRojos[1].style.background = "green";
*/
//ó mediante un bucle para tomar los dos
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	if (divsRojos[div].className == "rojo") {
		divsRojos[div].style.background = "green"; 
	}
}


//Querry selector, solo aplica con un elemento
var id = document.querySelector("#encabezado");
console.log(id);


var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);
//console.log(divsRojos);
//black purple pinck blue red brown 


