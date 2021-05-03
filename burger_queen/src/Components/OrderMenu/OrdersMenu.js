import '../../Components/OrderMenu/OrderMenu.css';
import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Elements/Navbar/Navbar.js';

export const OrderMenu = () =>{
	return(
		<div>
			<Navbar></Navbar>
			<div className="menu-Option">
			<button className="btn-newOrder"><Link to="/neworder">Nueva Orden</Link></button>
			<button className="btn-Order"><Link to="/orders">Ordenes</Link></button>
			<button className="btn-Admin">Administración</button>
			<button className="btn-Out"><Link to="/auth">Salir</Link></button>
			</div>
		</div>

	)
}