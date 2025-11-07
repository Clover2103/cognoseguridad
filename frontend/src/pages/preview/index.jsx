import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SedeContext } from "../../context/SedeContext";
import img from "../../assets/contact/back.jpeg";
import logo from "../../assets/Logo COGNOSEGURIDAD.png";
import './preview.css';

const Preview = () => {
  const navigate = useNavigate();
  const { setSede } = useContext(SedeContext);
  const [selectedSede, setSelectedSede] = useState("");

  const handleContinue = () => {
    if (!selectedSede) return; // no dejar avanzar sin seleccionar
    setSede(selectedSede);
    navigate("/home");
  };

  return (
    <div className="preview-body" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="preview-pelicula">
        <div className="content-preselect">
          <h3 className="title-preselect">Elija desde que sede de Cognoseguridad nos habla</h3>
          <img src={logo} alt="" className="logo-preselect" />

          <select 
            className="select-preselect" 
            value={selectedSede}
            onChange={(e) => setSelectedSede(e.target.value)}
          >
            <option value="">Seleccione una sede</option>
            <option value="Bogotá D.C.">Bogotá D.C.</option>
            <option value="Cucuta">Cúcuta</option>
            <option value="Villavicencio">Villavicencio</option>
            <option value="Bucaramanga">Bucaramanga</option>
          </select>

          <button className="button-select" onClick={handleContinue}>Continuar</button>
        </div>
      </div>
    </div>
  );
};

export { Preview };
