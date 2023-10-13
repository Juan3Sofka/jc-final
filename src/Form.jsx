import { useState } from "react";
import './Form.css'

export const Form = () => {
    const [value, setValue] = useState({
        //Inicializamos valores
        userName: "",
        email: "",
        password: "",
    })

    const handleInput = (event)=>{
        const {name, value}= event.target;
        setValue({
            ...value,
            [name]: value,
        })
    }

    const handleForm = (event)=>{
        event.preventDefault(); //Para que la página se recargue
        console.log(value)
    }

    return(
        <div className="container">
            <form action="" className="container__form">
                <h1 className="form__title">Bienvenid@</h1>
                <div className="form__input">
                    <i className="fas fa-user"></i>
                    <input type="text" name="userName" value={value.userName} placeholder="Ingresa tu usuario" onChange={handleInput}/>
                </div>

                <div className="form__input">
                    <i className="fas fa-envelope"></i>
                    <input type="email" name="email" value={value.email} placeholder="Ingresa tu email" onChange={handleInput}/>
                </div>
                
                <div className="form__input">
                    <i className="fas fa-lock"></i>
                    <input type="password" name="password" value={value.password} id="password" placeholder="Ingresa tu contraseña" onChange={handleInput}/>
                </div>

                <input type="submit" value="Ingresar" className="btn"/>
                
            </form>

            <div className="containerDos">
                <img className="form__logo" src="src/assets/logo-jovenesCreativos.png" alt="Jovenes Creativos"/>
            </div>

        </div>
    )
}