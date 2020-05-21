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
	El mes es: ${mes +1} //Le sumamos 1 ya que comienza a leer desde 0
	El dia es: ${dia}
	La hora es: ${hora}
	Los minutos son: ${minutos}
	Los segundos son: ${segundos}
`;
console.log (textoHora); 
console.log(Math.ceil(Math.random()*10000));