import './Header.css'
import { Link } from 'react-router-dom'
export const Header = ()=>{
    return(
        <div className="container__home">
            <header>
                <div className='container__logo'>
                    <img className='home__logo' src="src/assets/logo-jovenesCreativos.png" alt="Logo" width="250px" height="150px" />
                </div>

                <div className="container__title">
                    <h1>MyToDoList</h1>
                </div>
                <ul>
                    {/* Hacer función para eliminar session con On CliCK */}
                    <li><Link to='/' >Cerrar Sesion</Link></li>
                    <li><Link to='/registro'>Registro</Link></li>
                </ul>
            </header>
        </div>
    )
}