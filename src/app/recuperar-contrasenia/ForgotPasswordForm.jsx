import React from "react";
import "./ForgotPasswordForm.css";
import { FaUser } from "react-icons/fa";

const PasswordRecovery = ({ toggleForm }) => {
return (
    <div className="wrapper">
    <form action="">
        <h1>Recuperar Contraseña</h1>
        <div className="input-box">
        <input type="text" placeholder="Nombre de usuario" required />
        <FaUser className="icon" />
        </div>

        <button type="submit">Restablecer Contraseña</button>

        <div className="register-link">
        <p>
            ¿Ya tenés una cuenta?
            <a onClick={toggleForm}> Iniciá sesión</a>
        </p>
        </div>
        </form>
    </div>
);
};

export default PasswordRecovery;
