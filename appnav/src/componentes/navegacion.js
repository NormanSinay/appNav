import '../estilos/navegacion.css';
import { Link, Outlet} from "react-router-dom";

function MenuNav() {
    return(
        <div className="contenedorNav">
            <nav className="navegacion">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default MenuNav;