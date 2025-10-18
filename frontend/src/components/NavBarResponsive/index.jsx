import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Logo COGNOSEGURIDAD.png";
import "./NavBarResponsive.css";

const NavBarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navBarResponsive">
      <div className="navBarResponsive__header">
        <div className="navBarResponsive__logo">
          <div className="navBarResponsive__logo cogno-logo-navbar">
            <Link to="/">
              <img src={logo} alt="Cognoseguridad" />
            </Link>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {isMenuOpen && (
        <div className="navBarResponsive__links">
          <Link to="/" onClick={toggleMenu}>INICIO</Link>
          <Link to="/scopes" onClick={toggleMenu}>CURSOS</Link>
          <Link to="/consultation" onClick={toggleMenu}>CONSULTAS</Link>
          <Link to="/contact" onClick={toggleMenu}>CONTACTO</Link>
          <div className="btnFormRes">
            <a href="https://e.learning.cognoseguridad.com/" target="_blank" rel="noreferrer">
              <button >
                INGRESAR
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export { NavBarResponsive };
