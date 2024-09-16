import React from "react";
import { Link } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import isme from "../../assets/Logo ISME.png";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <div className="footer row g-3">

      <div className="cont-area col-md-4">

        <div className="cont-acred">
          <p>Auditado y verificado por: </p>
          <div className="cont-logo-footer">
            <img src={isme} alt="ISME" />
          </div>
        </div>

        <div className="redes">
          <div>
            <a href="" target="_blank">
              <FaTiktok className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/people/AIEX-SAS/100063556121959/" target="_blank" className="cl-p" >
              <FaFacebook className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/aiexsas/" target="_blank" className="cl-p">
              <FaInstagram className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="dm.wa.link/3i9kxz" target="_blank" className="cl-p">
              <FaWhatsapp className="red-icon"/>
            </a>
          </div>
        </div>

      </div>

      <div className="cont-area col-md-4">
        
        <div>
          <div>
            <p>NUESTRA UBICACIÓN</p>
            <div className="cont-map">
              <iframe 
                width="250" 
                height="180" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.36601119899!2d-74.0657435!3d4.6666884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af8071d02c5%3A0xb91454118c0ce402!2sAcademia%20Cognoseguridad%20Ltda.!5e0!3m2!1ses-419!2sco!4v1725987736366!5m2!1ses-419!2sco"
                title="Mapa de ubicación"
              >
              </iframe>
            </div>
          </div>
        </div>
        <div>
          <p>© 2024 Cognoseguridad LTDA. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className="cont-area col-md-4">
        <div className="cont-links">
          <p><Link to="/policies">¿Quienes somos?</Link></p>
          <p><Link to="/home#homeAboutUs">Nuestros cursos</Link></p>
          <p><Link to="/scopes#scopesBody">Contactenos</Link></p>
          <p><Link to="/contact">Conoce nuestras sedes</Link></p>
          <p><Link to="/scopes-r-and-d">Quejas / Apelaciones</Link></p>
          <p><Link to="/scopes-rules">Consulta tu certificado</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export { Footer };