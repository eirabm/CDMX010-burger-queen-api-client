import './../../Components/Login/Login.css'
import React from 'react';
import logoBQ from './../../Assets/Images/logoBQ.png'


export const Login=()=>{
	const changeView = () =>{
		console.log('me picaste <3')
	}

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
					<button onClick={changeView}>Ingresar</button>
				</form>

			</div>
		</div>
	)
}