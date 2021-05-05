import './../RegisEmployee/RegisEmployee.css';
import React from 'react';

export default function RegisEmployee() {
	return(
		<div className="container-registration">
			<h1>Registro de usuarios</h1>
			<form className="form-registration">
				<input type="text" name="name" placeholder="Nombre completo del empleado"/>
				<input type="email" name="email" placeholder="Correo electronico" />
				<input type="password" name="password" placeholder="Contraseña" />
				<label>
					Puesto
				<select>
					<option value="admin">Administrativo</option>					
					<option value="chef">Cocinero</option>
					<option value="waitress">Mesera/Mesero</option>
				</select>
				</label>
				<input type="submit" value="Registrar"/>
			</form>
		</div>
	)
	
}