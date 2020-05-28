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

	//Drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("Has soltado algo dentro del area");
		}
	});

	// Efectos
	$("#mostrar").click(function(){
	 	//$(".caja-efectos").fadeToggle();
	 	//$(".caja-efectos").effect("explode");	//Solo se aplica el efecto pero no se queda el objeto.
			//$(".caja-efectos").toggle("explode");
			//$(".caja-efectos").toggle("drop");
			//$(".caja-efectos").toggle("blind");
			//$(".caja-efectos").toggle("slide");
			//$(".caja-efectos").toggle("fold");
			//$(".caja-efectos").toggle("puff");
			//$(".caja-efectos").toggle("scale");
			//$(".caja-efectos").toggle("shake", "slow");
			$(".caja-efectos").toggle("shake", 4000); // Tarde un tiempo determinado
				});

		//Tooltip
		$(document).tooltip();

		//Dialog
		$("#lanzar-popup").click(function(){
		$("#popup").dialog();
		});

		//Datepicker
		$("#calendario").datepicker();
});