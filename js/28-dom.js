'use strict'

//DOM-Document Objet Model

function cambiaColor (color){
	caja.style.background = color;
}



//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); 

caja.innerHTML ="¡Texto en la caja desde js!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2"; 
console.log(caja);


//black purple pinck blue red brown 


