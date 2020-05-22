// el simbolo $ y "jQuery" son lo mismo
//jQuery(document).ready(function(){
/*
$ = un objeto
() = selector
.ready = metodo que es un evento
(function(){}); = funcion de callback
console.log(""); = llamar o mostrar lo que querramos.
*/

$(document).ready(function(){
/*	Selectores:
1.-Selector id
2,.Selector de clase
*/

/*Con el metodo ".css" podemos modificar cualquier 
propiedad css, poniendo primero paramertro la clave(background),
y segundo el valor(red).
*/
//Selector ID
	$("#rojo").css("background", "red")
			.css("color", "white");
	$("#amarillo").css("background", "yellow")
				.css("color","green");
	$("#verde").css("background","green")
				.css("color", "white");
	//console.log("Estamos listos!");
	//console.log(rojo);

	//Selector de clases
	var mi_clase = $('.zebra');
	//console.log(mi_clase[0]);
	//console.log(mi_clase.eq(1));
	mi_clase.css("padding","5px");

		$('.sin_borde').click(function(){
			console.log("Click dado");
			$(this).addClass('zebra');
		});

// Selectores de etiqueta
		var parrafos = $('p').css("cursor","pointer");

		parrafos.click(function(){
			var that = $(this);
			if (!that.hasClass('grande')) {
				that.addClass('grande');
			}else{
				that.removeClass('grande');
			}
		});
						//Selectores de atributo
			$('[title="Google"]').css('background', '#ccc');
			$('[title="Facebook"]').css('background', 'blue');

	});