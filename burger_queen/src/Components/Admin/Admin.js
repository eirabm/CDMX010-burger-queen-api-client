import Navbar from '../Elements/Navbar/Navbar.js';
import RegisEmployee from '../Elements/RegisEmployee/RegisEmployee.js';
import Empleados from '../Elements/Empleados/Empleados.js';
import Inventario from '../Elements/Inventario/inventario.js';
import '../Admin/Admin.css';
import { useState } from 'react';

 export const Admin = () => {

   const [actualWindow, setActualWindow] = useState(<RegisEmployee />)

    return ( 
        <div>
            <Navbar/>

            <div className="admin-menu">
            <button onClick={()=>setActualWindow(<RegisEmployee />)}>Registro de Empleados</button>
            <button onClick={()=>setActualWindow(<Inventario />)}>Inventario</button>
            <button onClick={()=>setActualWindow(<Empleados />)}>Empleados</button>
            </div>
            <hr />
            
				{actualWindow}

        </div>
     );
}

