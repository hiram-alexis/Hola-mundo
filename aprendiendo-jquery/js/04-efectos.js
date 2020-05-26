$(document).ready(function(){
	var caja = $("#caja");

	//Hide y show
$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		//$("#caja").show("fast");	//Recogido Rapido
		//$("#caja").show("slow");	//Recogido lento
		//$("#caja").show("normal");	//Recogido Normal

		//$("#caja").fadeIn("slow");	//Desvanecido

		caja.slideDown("slow");	//Desplegar

		//$("#caja").fadeTo("slow", 1);	// Opacidad Minima
	});
		$("#ocultar").click(function(){
			$(this).hide();
			$("#mostrar").show();
			//$("#caja").hide("fast");
			//$("#caja").fadeOut("slow");	//Aparición
		
			caja.slideUp("slow");	//Retraer

			//$("#caja").fadeTo("slow", 0);	// Opacidad Maxima
			});


		//En el siguiente codigo hacemos las dos cosas en un solo metodo.
		$("#todoEnUno").click(function(){
			//$("#caja").toggle('fast');		//Efecto recoger.
			//$("#caja").fadeToggle('fast');	//Efecto desbanecer
			caja.slideToggle('fast');		//Efecto  desplegar
		});

		$("#animar").click(function(){
			
			caja.animate({
							marginLeft: '500px',
							fontSize: '70px',
							height: '110px'
					}, 'slow')
				
				.animate({
							borderRadius: '900px',
							marginTop: '80px'
					}, 'slow')
				.animate({
							borderRadius: '0px',
							marginLeft: '0px'
					}, 'slow')
				.animate({
							borderRadius: '100px',
							marginTop: '0px'
					}, 'slow')
				.animate({
							marginLeft: '500px',
							fontSize: '70px',
							height: '110px'
					}, 'slow')
			;
		});

});