import './../RegisEmployee/RegisEmployee.css';
import React, { useState } from 'react';

export default function RegisEmployee() {

	const[datos, setDatos]=useState({
		number:'',
		name:'',
		email:'',
		password:'',
		position:''
	})
	const handleInputChange = (event)=>{
		setDatos({
			...datos,
			[event.target.name]:event.target.value
		})
	}
	const sendData =(event)=>{
		event.preventDefault();
		console.log(datos);
		fetch('http://localhost:8000/auth', {
				method: 'POST',
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify(datos)
			}).then(
				alert("Registro exitoso")
			)

	}


	return(
		<div className="container-registration">
			<h1 id="title">Ingrese datos del empleado</h1>
			<form className="form-registration" onSubmit={sendData}>
				<input className="number-emp" type="number" name="number" placeholder="Numero de empleado" onChange={handleInputChange} />
				<input className="username-reg" type="text" name="name" placeholder="Nombre completo del empleado" onChange={handleInputChange} />
				<input className="email-reg" type="email" name="email" placeholder="Correo electronico" onChange={handleInputChange} />
				<input className="password" type="password" name="password" placeholder="Contraseña" onChange={handleInputChange} />
				<input className="position" type="text" name="position" placeholder="Cargo" onChange={handleInputChange} />
				<input id="send" type="submit" value="Registrar"/>
			</form>
		</div>
	)

}