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
            <a href="https://www.facebook.com/CognoseguridadBogota/?mibextid=LQQJ4d&_rdr" target="_blank" className="cl-p" >
              <FaFacebook className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/cognoseguridad/?next=%2F" target="_blank" className="cl-p">
              <FaInstagram className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=573105610135" target="_blank" className="cl-p">
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
              src="https://www.google.com/maps/d/embed?mid=16sJyRGR8xyoH6iyhlL5a1XmFSiYoiGc&ehbc=2E312F" 
              width="310"
              height="280"
            ></iframe>
            </div>
          </div>
        </div>
        <div>
          <p>© 2024 Cognoseguridad LTDA. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className="cont-area col-md-4">
        <div className="cont-links">
          <p><Link to="/#aboutUs">¿Quienes somos?</Link></p>
          <p><Link to="/curses">Nuestros cursos</Link></p>
          <p><Link to="/contact">Contactenos</Link></p>
          <p><Link to="/contact">Quejas / Apelaciones</Link></p>
          <p><Link to="/consultation">Consulta tu certificado</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export { Footer };