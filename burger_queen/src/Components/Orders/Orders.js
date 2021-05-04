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
        <div className="orders-muenu">
            <button>Ordenes entrantes</button>
            <button>Ordenes finalizadas</button>
            <button>Ordenes cerrradas</button>
            <hr/>
        </div>

        <div className = "orders-container">
            { Orders.map((order) => (
                <div className = "order-card" key={order.id}>
                <h3>
                    {order.client}
                </h3>
                {order.products.map((item) => (
                    <p>{item.qty} {item.product}</p>
                ))}
                </div>
            ))}
        </div>
    </div>
    );
}