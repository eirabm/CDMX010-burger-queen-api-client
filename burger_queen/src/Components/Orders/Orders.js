import '../../Components/Orders/Orders.css';
import Navbar from '../Elements/Navbar/Navbar.js';
import { useEffect } from 'react';
import React, { useState } from 'react';

export const Orders = () => {

    const [Orders, setOrders] = useState([])

    useEffect(() => {

		fetch('http://localhost:3000/orders')
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
                <h2>Cliente:{order.client}</h2>
								</div>
								<div className="order-products">
									{order.products.map((item) => (

                  	<p>{item.qty} {item.product}</p>
                	))}
								</div>

                </div>
            ))}
        </div>
    </div>
    );
}