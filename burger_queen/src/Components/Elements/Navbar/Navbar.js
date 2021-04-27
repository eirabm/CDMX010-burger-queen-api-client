import './../../Elements/Navbar/Navbar.css';
import React from 'react';
import logoNavbar from './../../../Assets/Images/logoNavbar.png';
import menuGral from './../../../Assets/Icon/menuGral.png'

 export default function Navbar(){
	return(
		<div className="navbar">
			<img className="navbar-iconMenuGral" src={menuGral} alt="Menu General" />
			<img className="navbar-img" src={logoNavbar} alt="Burger Queen"/>
			<label className="navbar-userName">User Name</label>

		</div>
	)
}