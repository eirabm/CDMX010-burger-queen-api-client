import '../../Components/OrderMenu/OrderMenu.css';
import React from 'react';
import Navbar from '../Elements/Navbar/Navbar.js';

export const OrderMenu=()=>{
	return(
		<div>
			<Navbar></Navbar>
			<div className="menu-Option">
			<button className="btn-newOrder">Nueva Orden</button>
			<button className="btn-Order">Ordenes</button>
			<button className="btn-Admin">Administración</button>
			<button className="btn-Out">Salir</button>
			</div>
		</div>
	)
}