'use strict'; 

var div_usuarios = document.querySelector("#usuarios");

//Fetch (ajax) y peticiones a servicios / apis rest
var usuarios =[];

fetch('https://reqres.in/api/users')	//accedemos a los datos remotos (servicio remoto).
.then(data => data.json())	//Recibimos los datos y los convertimos en json
.then(users =>{	//Ya que tenemos la información la capturamos en users.
		usuarios = users.data;	//Guardamos los datos en usuarios.
		console.log(usuarios);	//Mostramos en consola los datos

		usuarios.map((user, i) =>{
		let nombre = document.createElement('h3');	

		nombre.innerHTML = i + '.' + user.first_name + " " + user.last_name;

		div_usuarios.appendChild(nombre);

		document.querySelector(".loading").style.display = 'none';
		});
});
