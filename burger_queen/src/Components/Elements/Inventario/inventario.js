import './../../Elements/Inventario/inventario.css';
import React, { useEffect, useState } from 'react';

export default function Inventario() {
const[products, setProducts]=useState(null);

useEffect(()=>{
	fetch('http://localhost:8000/inventary')
	.then((res)=>res.json())
	.then((data)=>{setProducts(data);})
},[])

	return (
		<div className="container-products">
				<h1 id="title">Inventario de productos</h1>
				<div className="container-cards">
				{products&&products.map((element)=>(
					<div key={element.id}className="card-inventario">
							<p className="name-product">Producto: {element.nameProduct}</p>
							<img className="img-product" src={element.imgProduct} alt=""/>
							<p className="existence-product">Existencia: {element.existenceProduct}</p>
					</div>
					))}
					</div>
		</div>
	);
}