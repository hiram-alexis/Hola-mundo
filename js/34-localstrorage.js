'use strict'

/*LocalStrorage
Guardar información en el navegador.
Una memoria que persiste.
*/

//Comprobar disponibilidad del LocalStorage.
if(typeof(Storage) !== 'undefined'){
	console.log("LocalStorage disponible");
} else{
	console.log("Incompatible con LocalStorage");
} 

//Guardar datos
localStorage.setItem("titulo", "Curso de synfony de Alexo");

//Recuperar elemento
//console.log(localStorage.getItem("titulo")); //Mostrarlo en consola
document.querySelector 	("#peliculas").innerHTML = localStorage.getItem("titulo"); //Mostrarlo en la pagina.

//Guardar objetos
var usuario ={
	nombre: "Alexo Sánchez",
	emaíl: "hiram.alexis1706@gmail.com",
	web : "hiram-alexis.web.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));


//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
//Mostrar un elemento
document.querySelector("#datos").append(userjs.web + "--"+ userjs.nombre);
//localStorage.removeItem("usuario"); //Eliminar un dato especifico.
localStorage.clear();