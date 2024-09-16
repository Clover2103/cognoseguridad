import React from "react";
import { Link } from 'react-router-dom'; // No necesitas HashRouter aquí
import logo from "../../assets/Logo COGNOSEGURIDAD.png";
import "./NavBar.css";

const NavBar = () => {


  return (
    <div className="navBar">
      <div className="navBarIzq gap-2">
        <div className="navBar__logo cogno-logo-navbar">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="cognoseguridad" />
          </Link>
        </div>
      </div>
      
      <div className="navBar__links gap-3">
        <Link to="/home">INICIO</Link>
        <Link to="/curses">CURSOS</Link>
        <Link to="/consultation">CONSULTAS</Link>
        <Link to="/contact">CONTACTO</Link>
      </div>

      <div className="btnForm">
        <button >
          INGRESAR
        </button>
      </div>
    </div>
  );
};

export { NavBar };
