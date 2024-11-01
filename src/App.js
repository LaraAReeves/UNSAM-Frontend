import React, { useState } from "react";
import LoginForm from "./app/login/LoginForm";
import RegisterForm from "./app/registro/RegisterForm";
import ForgotPasswordForm from "./app/recuperar-contrasenia/ForgotPasswordForm"; // Asegúrate de importar el nuevo componente
import Header from "./app/login/Header";
import Footer from "./app/login/Footer";

function App() {
  const [formType, setFormType] = useState("login");

  const toggleForm = () => {
    setFormType((prev) => (prev === "login" ? "register" : "login"));
  };

  const toggleForgotPassword = () => {
    setFormType((prev) => (prev === "forgot" ? "login" : "forgot"));
  };

  return (
    <div className="background">
      <Header />
      {formType === "login" && (
        <LoginForm
          toggleForm={toggleForm}
          toggleForgotPassword={toggleForgotPassword}
        />
      )}
      {formType === "register" && <RegisterForm toggleForm={toggleForm} />}
      {formType === "forgot" && <ForgotPasswordForm toggleForm={toggleForm} />}
      <Footer />
    </div>
  );
}

export default App;
