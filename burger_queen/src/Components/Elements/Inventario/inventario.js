import './../../Elements/Inventario/inventario.css';
import trash from '../../../Assets/Icon/trash.png';
import edit from '../../../Assets/Icon/edit.png';
import React, { useEffect, useState } from 'react';

export default function Inventario() {
const[products, setProducts]=useState(null);

useEffect(()=>{
	fetch('http://localhost:8000/inventary')
	.then((res)=>res.json())
	.then((data)=>{setProducts(data);})
},[])

const deleteProduct =(product)=>{
	fetch('http://localhost:8000/inventary/' + product.id,{
		method:'DELETE'
	})
	.then(console.log(product.id))
}


	return (
		<div className="container-products">
				<h1 id="title">Inventario de productos</h1>
				<div className="container-cards">
				{products&&products.map((element)=>(
					<div key={element.id}className="card-inventario">
						<div className="options">
							<img className="btn-edit" src={edit} alt="edit"/>
							<img className="btn-trash" src={trash} onClick={()=>deleteProduct(element)} alt="edit"/>
						</div>
							<p className="name-product">Producto: {element.nameProduct}</p>
							<img className="img-product" src={element.imgProduct} alt=""/>
							<p className="existence-product">Existencia:<input className="existence" type="number" value={element.existenceProduct} readOnly></input> </p>
					</div>
					))}
					</div>
		</div>
	);
}