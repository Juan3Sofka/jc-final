import './Header.css'
import { Link } from 'react-router-dom'
export const Header = ()=>{
    return(
        <header>
            <div>
                <img src="src/assets/logo-jovenesCreativos" alt="Logo" />
            </div>

            <h1>MyToDoList</h1>
            <ul>
                <li><Link to='/'>Cerrar Sesion</Link></li>
                <li><Link to='/registro'>Registro</Link></li>
            </ul>
        </header>
    )
}