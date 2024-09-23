import React, { useState } from "react";
import './ConsultationSelect.css';


const ConsultationSelect = ({ onSelectChange }) => {

  const handleSelectChange = (event) => {
    const value = event.target.value;
    console.log(value);
    onSelectChange(value);
  };

  return (
    <div className="bodyConsultationSelect container mb-3">
      <div className="form-floating consultation-cont">
        <select 
          className="form-select" 
          id="selectConsultation" 
          aria-label="Floating label select example" 
          onChange={handleSelectChange}
          defaultValue="certificado"
        >
          <option value="certificado">CERTIFICADO</option>
          <option value="promociones">PROMOCIONES</option>
          <option value="poligono">POLIGONO</option>
          <option value="sedes">SEDES</option>
        </select>
        <label htmlFor="selectConsultation">Realizar consulta</label>
      </div>
    </div>
  );

};

export { ConsultationSelect };