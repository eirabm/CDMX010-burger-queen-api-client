import './../../Elements/Navbar/Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom'
import logoNavbar from './../../../Assets/Images/logoNavbar.png';
import menuGral from './../../../Assets/Icon/home.svg'

 export default function Navbar(){
	return(
		<div className="navbar">
			<Link to="/">
				<img className="navbar-iconMenuGral" src={menuGral} alt="Menu General" />
			</Link>
			<img className="navbar-img" src={logoNavbar} alt="Burger Queen"/>
			<label className="navbar-userName">User Name</label>

		</div>
	)
}