import './../../Components/Login/Login.css'
import React from 'react';
import { Link } from 'react-router-dom'
import logoBQ from './../../Assets/Images/logoBQ.png'



export const Login=()=>{

	return(
		<div className="login">
			<div className="login-logo">
				<img className="logo" src={logoBQ} alt=""></img>
			</div>
			<div className="login-form">
				<h1>Iniciar Sesión</h1>
				<form>
					<input className="user" type="text" placeholder="Usuario"></input><br/>
					<input className="password" type="password" placeholder="Contraseña"></input><br/>
					<button><Link to="/">Ingresar</Link></button>
				</form>

			</div>
		</div>
	)
}