$(document).ready(function(){
	
	reloadLinks();

	$('#add_button')
	.removeAttr('disabled')
	.click(function(){
		//$('#menu').html('<li><a href="'+ $("#add_link").val()+'"></a></li>');	// Con la instruccion html agrega a la pagina pero elimina lo que estaba.
		$('#menu').append('<li><a href="'+ $("#add_link").val()+'"></a></li>');	// Con append Lo agrega hasta abajo de la lista.
		//$('#menu').prepend('<li><a href="'+ $("#add_link").val()+'"></a></li>');	//Con prepend lo agrega al inicio de la lista.
		//$('#menu').before('<li><a href="'+ $("#add_link").val()+'"></a></li>');	//Con before lo agrega pero en una lista aparte antes de la ya creada.
		//$('#menu').after('<li><a href="'+ $("#add_link").val()+'"></a></li>');	//Con before lo agrega pero en una lista aparte despues de la ya creada.
			$("#add_link").val('');
			reloadLinks();
	});
});

	function reloadLinks(){
		$('a').each(function(index){
		var that = $(this);
		var enlace = $(this).attr("href");

		that.attr('target','_blank');
		that.removeAttr();
		that.text(enlace);
		});
	}