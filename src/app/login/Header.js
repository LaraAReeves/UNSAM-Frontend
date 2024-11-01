import React from "react";
import logo from "/src/app/assets/logo-ciencia-tecnologia.png";

const Header = () => {
return (
    <header>
    <div className="header-content">
        <img src={logo} alt="Logo-CyT" className="logo-CyT" />
    </div>
    </header>
);
};

export default Header;
