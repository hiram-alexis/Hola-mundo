$(document).ready(function(){

/* Metodo Load
Permite hacer una peticion Ajax por get
e incrustar la información en un div o 
de cualquier elemento que se tenga en 
la pagina.
*/
//$("#datos").load("https://reqres.in/");

// Metodos Get y¨Post
	$.get("https://reqres.in/api/users", {page: 2}, function(response){
		response.data.forEach((element, index) => {
			$("#datos").append("<p>"+ element.first_name + " "+ element.last_name +"</p>");
			});
		});

});