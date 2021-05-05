import '../../Components/Orders/Orders.css';
import Navbar from '../Elements/Navbar/Navbar.js';
import React, { useState, useEffect } from 'react';

export const Orders = () => {

    const [Orders, setOrders] = useState([])
    const [orderStatus, setOrderStatus] = useState("pending")

    useEffect(() => {

		fetch('http://localhost:8000/orders')
		.then((res) =>res.json())
		.then((data) => {setOrders(data)})
		}, [])

    const orderReady = (order) => {

        order.status = "delivering"

        console.log(order)

        fetch('http://localhost:8000/orders/' + order.id,{
            method: 'PUT',
		    headers: { "Content-Type": "application/json"},
			body: JSON.stringify(order)
        })
        .then((res)=> console.log(res))

    }

    return (
    <div>
        <Navbar/>
        <div className="orders-menu">
            <button onClick={() => setOrderStatus('pending')}>Ordenes entrantes</button>
            <button onClick={() => setOrderStatus('delivering')}>Ordenes listas para entrega</button>
            <button onClick={() => setOrderStatus('closed')}>Ordenes cerrradas</button>
        </div>
			<hr/>
        <div className = "orders-container">
            { Orders.filter((x) => x.status === orderStatus).map((order) => (
                <div className = "order-card" key={order.id}>
				<div className="order-title">
				<h1> Orden {order.id}</h1>
                <p>{new Date().getHours() - new Date(order.dateEntry).getHours()}:{new Date().getMinutes() - new Date(order.dateEntry).getMinutes()}:{new Date().getSeconds() - new Date(order.dateEntry).getSeconds()}</p>
				</div>
				<div className="order-products">
                <h3>Cliente: {order.client}</h3>
				{order.products.map((item) => (
               	<p>{item.qty} {item.product}</p>
                ))}
				</div>
                <div className="orden-lista">
                    <button onClick={()=> orderReady(order)}>Enviar a Mesera</button>
                </div>

                </div>
            ))}
        </div>
    </div>
    );
}