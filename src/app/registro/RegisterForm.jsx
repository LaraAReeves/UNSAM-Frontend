import React, { useState } from "react";
import "./RegisterForm.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const RegisterForm = ({ toggleForm }) => {
const [passwordVisible, setPasswordVisible] = useState(false);
const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
};

const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
};

return (
    <div className="wrapper">
    <form action="">
        <h1>Registro</h1>
        <div className="input-box">
        <input type="text" placeholder="Nombre de usuario" required />
        <FaUser className="icon" />
        </div>
        <div className="input-box">
        <input type="email" placeholder="Correo electrónico" required />
        <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
        <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Contraseña"
            required
        />
        <FaLock
            className="icon"
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer" }}
        />
        </div>
        <div className="input-box">
        <input
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Confirmar contraseña"
            required
        />
        <FaLock
            className="icon"
            onClick={toggleConfirmPasswordVisibility}
            style={{ cursor: "pointer" }}
        />
        </div>

        <button type="submit">Registrarse</button>

        <div className="register-link">
        <p>
            ¿Ya tenés una cuenta?
            <a href="#" onClick={toggleForm}>
            Iniciá sesión
            </a>
        </p>
        </div>
    </form>
    </div>
);
};

export default RegisterForm;
