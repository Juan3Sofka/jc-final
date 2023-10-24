import { useState } from "react";
import './Registro.css'
import { Link } from "react-router-dom";

export const Registro = () => {
    const [ input, setInput] = useState({
        //Inicializamos valores
        userNameRegister: "",
        emailRegister: "",
        passwordRegister: "",
        passwordConfirmRegister: "",
    })

    const handleInputRegister = (event)=>{
        const {nameRegister, valuesRegister}= event.target;
        setInput({
            ...valueR,
            [nameRegister]: valuesRegister,
        })
    }

    const handleRegister = (event)=>{
        event.preventDefault(); //Para que la página se recargue
        console.log(input)
    }

    return(
    <div className="contain">
        <div className="containDosRegister">
            <img className="register__logo" src="src/assets/logo-jovenesCreativos.png" alt="Jovenes Creativos"/>
        </div>

        <form  className="container__register">
            <h1 className="register__title">Registro</h1>
            <div className="register__input">
                <i className="fa-regular fa-circle-user"></i>
                <input type="text" name="userNameRegister" placeholder="Usuario" onChange={handleInputRegister}/>
            </div>

            <div className="register__input">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" name="emailRegister"  placeholder="Email" onChange={handleInputRegister}/>
            </div>
            
            <div className="register__input">
                <i className="fas fa-lock"></i>
                <input type="password" name="passwordRegister"  id="Password" placeholder="Contraseña" onChange={handleInputRegister}/>
            </div>

            <div className="register__input">
                <i className="fa-solid fa-key"></i>
                <input type="password" name="passwordConfirmRegister"  id="PasswordConfirm" placeholder="Confirma tu contraseña" onChange={handleInputRegister}/>
            </div>

            <input type="submit" value="Registrar" className="register__btn" onClick={handleRegister}/>

            <Link to='/' className="register__link">Iniciar Sesión</Link>
            
        </form> 

    </div>
    )
}