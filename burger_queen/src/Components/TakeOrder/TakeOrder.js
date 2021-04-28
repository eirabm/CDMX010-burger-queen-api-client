import '../TakeOrder/TakeOrder.css';
import React, { useState } from 'react';
import Navbar from '../Elements/Navbar/Navbar.js';


export const TakeOrder=()=> {

	const [MenuItems, setMenuItems] = useState([
		{item : "Café con leche", price : "", id : 1},
		{item : "Café americano", price : "", id : 2},
		{item : "Jugo natural", price : "", id : 3},
		{item : "Sandwich jamón/queso", price : "", id : 4},
	])

	const changeMenu = () =>{
		setMenuItems([
			{item : "Hamburguesa", price : "", id : 1},
			{item : "Hamburguesa doble", price : "", id : 2},
			{item : "Papas fritas", price : "", id : 3},
			{item : "Aros de cebolla", price : "", id : 4},
			{item : "Agua 500ml", price : "", id : 5},
			{item : "Agua 750ml", price : "", id : 6},
			{item : "Bebida/gaseosa 500ml", price : "", id : 7},
			{item : "Bebida/gaseosa 750ml", price : "", id : 8},

		])
	}

	return(
		<div className="TakeOrder-Main" >
			<Navbar/>
			<div className="TakeOrder-Container">
				<div className="TakeOrder-Menu" >
					<button onClick={changeMenu}>Desayuno</button>
					<button onClick={changeMenu}>Almuerzo y cena</button>
					<hr/>
					<div className="items">
					{MenuItems.map((item) => (
						<div className="item-button" key={item.id}>
							<h1>{item.item}</h1>
						</div>
					))
					}
					</div>	
				</div>
				<div className="Takeorder-Board-Container">
					<div className="Takeorder-board">
					<label>Orden</label>
					<input className="user-name" type="text" placeholder="Nombre del cliente"></input>
					<div className="mock-order">
						<label> 1</label>
						<label>Jugo de naranja:</label>
						<label>$15.00</label><br/>
						<label> 1</label>
						<label>Torta de jamón</label>
						<label>$25.00</label>

					</div>
						<label>Total:</label>
					<button>Enviar a cocina</button>
					</div>
				</div>
			</div>
		</div>
	)

}