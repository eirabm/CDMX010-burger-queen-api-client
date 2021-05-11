import './../../Elements/Empleados/Empleados.css';
import trash from '../../../Assets/Icon/trash.png';
import edit from '../../../Assets/Icon/edit.png';
import { useState, useEffect } from "react";

export default  function Empleados(){

    const [Employees, setEmployees] = useState(null)

    useEffect(() => {
		fetch('http://localhost:8000/auth')
		.then((res) =>res.json())
		.then((data) => {setEmployees(data);})
		}, [] )

    const deleteEmployee = (employee) => {

        fetch('http://localhost:8000/auth/' + employee.id, {
            method: 'DELETE'
        })

    }

    return (
        <div className="container-registration">
        <h1 id="title">Empleados</h1>

        <div className="data-container">
            {Employees&&Employees.map((x) => (
                <div key={x.id} className="employee-card">
                    <p>{x.name}</p>
                    <p>{x.email}</p>
                    <p>{x.number}</p>
                    <p>{x.position}</p>
                    <img src={edit} alt="edit"/>
                    <img src={trash} onClick={()=>deleteEmployee(x)} alt="trash"/>
                </div>
            )
    )}

        </div>
        </div>
     );
}
