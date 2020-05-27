$(document).ready(function(){
	//Mover elemento por la pagina.
	$('.elemento').draggable();

	// Redimencionar
		$('.elemento').resizable();

	// Seleccionar elementos
	$(".lista-seleccionable").selectable();


});