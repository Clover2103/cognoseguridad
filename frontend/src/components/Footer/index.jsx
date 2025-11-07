import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SedeContext } from "../../context/SedeContext";
import { sedesData } from "../../data/sedesData";
import isme from "../../assets/Logo ISME.png";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  const { sede } = useContext(SedeContext);
  const info = sedesData[sede];

  return (
    <div className="footer row g-3">

      <div className="cont-area col-md-4">

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
            {info && (
              <a href={info.whatsApp} target="_blank" className="cl-p">
                <FaWhatsapp className="red-icon"/>
              </a>
            )
            }
          </div>
        </div>

        <div className="cont-acred">
          <p>Auditado y verificado por: </p>
          <div className="cont-logo-footer">
            <img src={isme} alt="ISME" />
          </div>
        </div>

        <div className="orientation-contact">
          <p><FaLocationDot className="icon-info-form"/> {info && (info.direccion)} </p>
          <p><FaPhoneAlt className="icon-info-form"/> +57 {info && (info.celular)}</p>
          <p><IoIosMail className="icon-info-form"/> cognoseguridad@cognoseguridad.com</p>
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
          <p><Link to="/home#aboutUs">¿Quienes somos?</Link></p>
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