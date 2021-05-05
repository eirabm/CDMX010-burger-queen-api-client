import Navbar from '../Elements/Navbar/Navbar.js';
import RegisEmployee from '../Elements/RegisEmployee/RegisEmployee.js';
import '../Admin/Admin.css';

 export const Admin = () => {

    return ( 
        <div>
            <Navbar/>

            <div className="admin-menu">
            <button>Registro de Empleados</button>
            <button>Inventario</button>
            <button>Empleados</button>
            </div>
            <hr />
				<RegisEmployee/>

        </div>
     );
}

