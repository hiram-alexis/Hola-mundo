'use strict'
var fecha = new Date();
var year = fecha.getFullYear();
var mes =fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textoHora= `
	El año es: ${year}
	El mes es: ${mes +1}
	El dia es: ${dia}
	La hora es: ${hora}
	Los minutos son: ${minutos}
	Los segundos son: ${segundos}
`;
console.log (textoHora); 
console.log(Math.ceil(Math.random()*10000));
console.log(Math.LN2);	// función Logaritmo natural de 2
console.log(Math.PI *10);	//El radio de un circulo de 10.
console.log(Math.log(5));	//ogaritmo de x numero.
