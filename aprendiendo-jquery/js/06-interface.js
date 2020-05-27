$(document).ready(function(){
	//Mover elemento por la pagina.
	$('.elemento').draggable();

	// Redimencionar
		$('.elemento').resizable();

	// Seleccionar y ordenar elementos
	//$(".lista-seleccionable").selectable();
	$(".lista-seleccionable").sortable({
		update: function(event, ui){
			console.log("ah cambiado la lista");
		}
	});

});