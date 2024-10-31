import React, { useState } from "react";
import LoginForm from "./app/login/LoginForm";
import RegisterForm from "./app/registro/RegisterForm";
import Header from "./app/login/Header";
import Footer from "./app/login/Footer";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="background">
      <Header />
      {isLogin ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
      <Footer />
    </div>
  );
}

export default App;
