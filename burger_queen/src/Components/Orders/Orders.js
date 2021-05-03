import '../../Components/Orders/Orders.css';
import Navbar from '../Elements/Navbar/Navbar.js';
import { useEffect } from 'react';
import React, { useState } from 'react';

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
        <div className="orders-muenu">
            <button>Ordenes entrantes</button>
            <button>Ordenes finalizadas</button>
            <button>Ordenes cerrradas</button>
            <hr/>
        </div>

        <div className = "orders-container">
            { Orders.map((order) => (
                <div className = "order-card" key={order.id}>
                <h1>
                    {order.client}
                </h1>
                {order.products.map((item) => (
                    <p>{item.qty} {item.product}</p>
                ))}
                </div>
            ))}
        </div>
    </div>
    );
}