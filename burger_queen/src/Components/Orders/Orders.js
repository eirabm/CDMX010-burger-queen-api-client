import '../../Components/Orders/Orders.css';
import Navbar from '../Elements/Navbar/Navbar.js';
import React, { useState, useEffect } from 'react';

export const Orders = () => {

    const [Orders, setOrders] = useState([])

    useEffect(() => {

		fetch('http://localhost:8000/orders')
		.then((res) =>res.json())
		.then((data) => {setOrders(data)})
		}, [])

    return (
    <div>
        <Navbar/>
        <div className="orders-menu">
            <button>Ordenes entrantes</button>
            <button>Ordenes finalizadas</button>
            <button>Ordenes cerrradas</button>
        </div>
			<hr/>
        <div className = "orders-container">
            { Orders.map((order) => (
                <div className = "order-card" key={order.id}>
				<div className="order-title">
				<h1> Orden {order.id}</h1>
                <p>00:00:00</p>
				</div>
				<div className="order-products">
                <h3>Cliente: {order.client}</h3>
				{order.products.map((item) => (
               	<p>{item.qty} {item.product}</p>
                ))}
				</div>
                <div className="orden-lista">
                    <button>Enviar a Mesera</button>
                </div>

                </div>
            ))}
        </div>
    </div>
    );
}