import './../../Elements/Navbar/Navbar.css';
import React from 'react';
import logoNavbar from './../../../Assets/Images/logoNavbar.png';

 export default function Navbar(){
	return(
		<div className="navbar">
			<i class="fa fa-cutlery" aria-hidden="true"></i>
			<img className="navbar-img" src={logoNavbar} alt="Burger Queen"/>
		</div>
	)
}