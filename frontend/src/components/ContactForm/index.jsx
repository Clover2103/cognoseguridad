import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="bodyContactForm">
      <div className="containerContactForm row g-2">
        <div className="col-md">

        </div>
        <div className="contentContactForm col-md mb-5">
          <h4>FORMULARIO DE CONTACTO</h4>
          <form id="formContact">

            <div className="form-floating">
              <select className="form-select w-100 mb-2" id="floatingSelect" aria-label="Floating label select example">
                <option>--</option>
                <option value="SOLICITUD">SOLICITUD</option>
                <option value="QUEJA">QUEJA</option>
                <option value="APELACIÓN">APELACIÓN</option>
              </select>
              <label for="floatingSelect">Tipo de Solicitud</label>
            </div>

            <div className="form-floating mb-2">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Nombres</label>
            </div>

            <div className="form-floating mb-2">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Correo</label>
            </div>

            <div className="form-floating mb-2">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Asunto</label>
            </div>

              <div className="form-floating mb-2">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                <label for="floatingTextarea2">Mensaje</label>
              </div>

              <button className="btn btn-primary w-100" type="submit">Enviar</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export { ContactForm };