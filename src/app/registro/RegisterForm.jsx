import React from 'react';
import './RegisterForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const RegisterForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Registro</h1>
                <div className="input-box">
                    <input type="text" placeholder='Nombre de usuario' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Correo electrónico' required />
                    <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirmar contraseña' required />
                    <FaLock className='icon' />
                </div>

                <button type='submit'>Registrarse</button>

                <div className="register-link">
                    <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
