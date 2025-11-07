import React from "react";
import img from "../../assets/contact/back.jpeg"
import logo from "../../assets/Logo COGNOSEGURIDAD.png";
import './preview.css';

const Preview = () => {
  return (
    <div className="preview-body" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="preview-pelicula">
        <div className="content-preselect">
          <h3 className="title-preselect">Elija desde que sede de Cognoseguridad nos habla</h3>
          <img src={logo} alt="" className="logo-preselect" />
          <select name="" id="" className="select-preselect">
            <option value="">Bogotá D.C.</option>
            <option value="">Cucuta</option>
            <option value="">Villavicencio</option>
            <option value="">Bucaramanga</option>
          </select>
          <button className="button-select">Continuar</button>
        </div>
      </div>
    </div>
  );
};

export { Preview };