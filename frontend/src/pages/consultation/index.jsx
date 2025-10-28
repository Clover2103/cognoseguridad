import React, { useState } from "react";
import { FileText, MapPin , LocateFixed , Layers } from 'lucide-react';
import { ConsultationCertificate } from "../../components/ConsultationCertificate";
import { ConsultationPolygon } from "../../components/ConsultationPolygon";
import { ConsultationSedes } from "../../components/ConsultationSedes";
import "./consultation.css"

const NavItem = ({ icon: Icon, label, value, isSelected, onClick }) => {
  // Aplicamos la clase 'selected' si es true
  const className = `nav-item ${isSelected ? 'selected' : ''}`;
  
  return (
    <div
      className={className}
      onClick={() => onClick(value)}
      role="button"
      aria-pressed={isSelected}
      aria-label={`Seleccionar ${label}`}
    >
      <Icon className="icon" />
      <label>{label}</label>
    </div>
  );
};

const ConsultationSelect = ({ selectedValue, onSelectChange }) => {
  const navItems = [
    { value: 'certificado', label: 'Certificado', icon: FileText },
    { value: 'poligono', label: 'Poligono', icon: LocateFixed  },
    { value: 'sedes', label: 'Sedes', icon: MapPin  },
  ];

  return (
    <div className="consultation-nav-bar"> 
      {navItems.map((item) => (
        <NavItem
          key={item.value}
          {...item}
          isSelected={selectedValue === item.value}
          onClick={onSelectChange}
        />
      ))}
    </div>
  );
};

const Consultation = () => {
  // Estado inicializado a 'certificado'
  const [selectedOption, setSelectedOption] = useState('certificado');

  const handleSelectChange = (value) => {
    console.log("Opción seleccionada:", value);
    setSelectedOption(value);
  };

  return ( 
    <div className="consultation-app">

      <div className="consultation-wrapper">
        
        {/* Encabezado */}
        <h1 className="app-header">
            <Layers className="icon" />
            Panel de Consulta
        </h1>
        
        {/* Componente de Navegación (ConsultationSelect) */}
        <ConsultationSelect 
            selectedValue={selectedOption} 
            onSelectChange={handleSelectChange} 
        />
        
        {/* Contenido Dinámico (Renderizado Condicional) */}
        <section className="content-container">
            {selectedOption === 'certificado' && <ConsultationCertificate />}
            {selectedOption === 'poligono' && <ConsultationPolygon />}
            {selectedOption === 'sedes' && <ConsultationSedes />}
        </section>
        
      </div>
    </div>
  );
};

export { Consultation };