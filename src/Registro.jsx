import { useState } from "react";

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
            ...input,
            [nameRegister]: inputs,
        })
    }

    const handleRegister = (event)=>{
        event.preventDefault(); //Para que la página se recargue
        console.log(input)
    }

    return(
        <div className="container">
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
                    <input type="password" name="passwordRegister"  id="password" placeholder="Contraseña" onChange={handleInputRegister}/>
                </div>

                <div className="register__input">
                    <i className="fa-solid fa-key"></i>
                    <input type="password" name="passwordConfirmRegister"  id="password" placeholder="Confirma tu contraseña" onChange={handleInputRegister}/>
                </div>

                <a href="/form">Iniciar Sesión</a>
                
            </form>

            <div className="containerDosRegistro">
                <img className="form__logo" src="src/assets/logo-jovenesCreativos.png" alt="Jovenes Creativos"/>
            </div>

        </div>
    )
}