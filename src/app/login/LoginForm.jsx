import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({ toggleForm, toggleForgotPassword }) => {
return (
    <div className="wrapper">
    <form action="">
        <h1>Inicio de sesión</h1>
        <div className="input-box">
        <input type="text" placeholder="Nombre de usuario" required />
        <FaUser className="icon" />
        </div>
        <div className="input-box">
        <input type="password" placeholder="Contraseña" required />
        <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
        <label>
            <input type="checkbox" />
            Recordar nombre de usuario
        </label>
        <a href="#" onClick={toggleForgotPassword}>
            ¿Olvidó su contraseña?
        </a>
        </div>

        <button type="submit">Acceder</button>

        <div className="register-link">
        <p>
            ¿No tenés una cuenta? 
            <a onClick={toggleForm}>Registrate</a>
        </p>
        </div>
    </form>
    </div>
);
};

export default LoginForm;
