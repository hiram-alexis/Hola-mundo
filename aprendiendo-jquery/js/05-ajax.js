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

// Metodo Post


	$("#formulario").submit(function(e){
		e.preventDefault();

	var usuario = {
			"name": $('input[name ="name"]').val(),
			web : $('input[name ="web"]').val()
				};
		//console.log(usuario);

		$.post($(this).attr("action"), usuario, function(response){
			console.log(response);
		}).done(function(){
			alert("Usuario añadido correctamente");
		}) ;
		return false;
	})
});