'use strict'; 

var div_usuarios = document.querySelector("#usuarios");

var div_janet = document.querySelector("#janet");
//Fetch (ajax) y peticiones a servicios / apis rest

fetch('https://reqres.in/api/users')	//accedemos a los datos remotos (servicio remoto).
.then(data => data.json())	//Recibimos los datos y los convertimos en json
.then(users =>{	//Ya que tenemos la información la capturamos en users.
		usuarios = users.data;	//Guardamos los datos en usuarios.
		console.log(usuarios);	//Mostramos en consola los datos

	return fetch('https://reqres.in/api/users')	//accedemos a los datos remotos (servicio remoto).
}
	function getJanet(){

function getInfo(){
	var profesor ={
		nombre: 'Alexo',
		apellidos: 'Sánchez',

function listadoUsuarios(usuarios){
		usuarios.map((user, i) =>{
		let nombre = document.createElement('h3');	

		nombre.innerHTML =  i + '.' + user.first_name + " " + user.last_name;

		div_usuarios.appendChild(nombre);

		document.querySelector(".loading").style.display = 'none';
		});
}

		function mostrarJanet(user){
			console.log(user);
			let nombre = document.createElement('h4');	
			let avatar = document.createElement('img');
			nombre.innerHTML = user.first_name + " " + user.last_name;
			avatar.src= user.avatar;
			avatar.width = '100';

			div_janet.appendChild(nombre);
			div_janet.appendChild(avatar);
			document.querySelector("#janet .loading").style.display = 'none';
		}

