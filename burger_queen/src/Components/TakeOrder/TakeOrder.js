import '../TakeOrder/TakeOrder.css';
import React, { useState } from 'react';
import Navbar from '../Elements/Navbar/Navbar.js';
import { useEffect } from 'react';

export const TakeOrder=()=> {

	const [menu, setMenu] = useState(null)
	const [orderItems, setOrderItems] = useState([]);
	const [clientName, setClientName] = useState('')


		useEffect(() => {

		fetch('http://localhost:3000/items')
		.then((res) =>res.json())
		.then((data) => {setMenu(data)})
		}, [])

		const clicked = (item) => {
			const exists = orderItems.find((x) => x.productId === item.productId);
			if(exists){
				setOrderItems(
					orderItems.map((x) => x.productId === item.productId ? { ...exists, qty: exists.qty + 1 } : x
					))
			}else{
				setOrderItems([...orderItems, { ...item, qty: 1 }]);
			}
		}

		const sendOrder = () => {
			const order = {
				"client" : clientName,
				"products" : orderItems
			}

			fetch('http://localhost:3000/orders', {
				method: 'POST',
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify(order)
			})
		}

	return(
		<div className="TakeOrder-Main">
			<Navbar/>
			<div className="TakeOrder-Container">
				<div className="TakeOrder-Menu" >
					<button>Desayuno</button>
					<button>Almuerzo y cena</button>
					<hr/>
					<div className="items">
					{menu && menu.map((item) => (
						<div className="item-button" key={item.productId} onClick={()=>clicked(item)}>
							<h1>{item.product}</h1>
						</div>
					))
					}
					</div>
				</div>
				<div className="Takeorder-Board-Container">
					<div className="Takeorder-board">
					<p id="ñ">Orden</p>
					<input className="user-name" type="text" required placeholder="Nombre del cliente"
					value={clientName} onChange={(e) => setClientName(e.target.value)}></input>
					<div className="order">
						{orderItems.map((item) =>(
							<p key={item.productId}>
							{item.qty} {item.product} ${item.price * item.qty}
							</p>
						))
						}
					</div>
					<p>Total: ${orderItems.reduce((a,b) => a + b.price * b.qty, 0)}</p>
					<button onClick={sendOrder}>Enviar a cocina</button>
					</div>
				</div>
			</div>
		</div>
	)

}