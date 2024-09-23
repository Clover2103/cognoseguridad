import React from "react";
import './ConsultationPolygon.css';
import { ImTarget } from "react-icons/im";

const ConsultationPolygon = () => {
  return (
    <div class="bodyConsultationPolygon">
      {/* <!-- Estructura del formulario --> */}
      <form id="form_asistencia_poli" >

          {/* <!-- Primera seccion de validacion del codigo de poligono --> */}
          <section id="body-cod" class="secc_prin_2 mt-5">
              <h2>VALIDACION CODIGO DE POLIGONO</h2>
              <div class="val-cod form-floating">
                  <input type="text" class="form-control" name="numero documento" maxlength="6" id="cod_poli" placeholder="CODIGO DE POLIGONO *" oninput="this.value = this.value.toUpperCase()" />
                  <label for="cod_poli">INGRESE CODIGO DE POLIGONO</label>
              </div>
              <p id="p-error" class="text-danger" style={{display:"none"}}>Codigo de poligono incorrecto</p>
              <button class="btn_enviar" id="vali_codigo" >VERIFICAR <ImTarget /></button>
          </section>

          {/* <!-- Segunda seccion estructura completa de formulario de asistencia poligono --> */}
          <div id="body-form" style={{display:"none"}}>
              <section class="secc_prin mt-4">
                  <h2>ASISTENCIA POLÍGONO - ACADEMIA COGNOSEGURIDAD LTDA</h2>
                  <p>
                      Registro asistencia ejercicio practico de tiro, en 
                      las instalaciones de Cognoseguridad LTDA. 
                      De esta manera aportamos nuestro granito de arena a cuidar 
                      el planeta con menos impresiones. Recuerda siempre 
                      verificar tus datos antes de enviar tu respuesta.
                  </p>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <input type="number" class="form-control" name="numero documento" id="numero_doc" placeholder="N° de documento *" />
                      <label for="numero_doc">N° de documento <span>*</span></label>
                  </div>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <input type="text" class="form-control" name="nombres" id="nombres" placeholder="Nombres *" />
                      <label for="nombres">Nombres <span>*</span></label>
                  </div>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <input type="text" class="form-control" name="apellidos" id="apellidos" placeholder="Apellidos *" />
                      <label for="apellidos">Apellidos <span>*</span></label>
                  </div>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <input type="number" class="form-control" name="celular" id="celular" placeholder="Celular *" />
                      <label for="celular">Celular <span>*</span></label>
                  </div>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <input type="email" class="form-control" name="correo electronico" id="correo" placeholder="Correo electronico *" />
                      <label for="correo">Correo electronico<span>*</span></label>
                  </div>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <input type="text" class="form-control" name="contacto de emergencia" id="cont_emerg" placeholder="Nombre de contacto de emergencia *" />
                      <label for="cont_emerg">Nombre de contacto de emergencia <span>*</span></label>
                  </div>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <input type="number" class="form-control" name="celular contacto de emergencia" id="num_cont_emerg" placeholder="Celular de contacto de emergencia *" />
                      <label for="num_cont_emerg">Celular de contacto de emergencia <span>*</span></label>
                  </div>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <select class="form-select" id="enfoque" aria-label="Selecciona el enfoque de ejercicio practico">
                          <option value="">Seleccionar enfoque</option>
                          <option value="VIGILANCIA">VIGILANCIA</option>
                          <option value="SUPERVISOR">SUPERVISOR</option>
                          <option value="ESCOLTA">ESCOLTA</option>
                          <option value="OPERADOR DE MEDIOS">OPERADOR DE MEDIOS</option>
                          <option value="DCCAE (PISTOLA)">DCCAE (PISTOLA)</option>
                          <option value="DCCAE (REVOLVER)">DCCAE (REVOLVER)</option>
                      </select>
                      <label for="enfoque">Selecciona el enfoque de ejercicio practico <span>*</span></label>
                  </div>
              </section>
              <section class="input">
                  <div class="form-floating w-100">
                      <select class="form-select" id="entrega" aria-label="Entrega documento fisico o digital">
                          <option value="">Seleccionar</option>
                          <option value="FISICO">FISICO</option>
                          <option value="DIGITAL">DIGITAL</option>
                      </select>
                      <label for="entrega">Entrega documento fisico o digital <span>*</span></label>
                  </div>
              </section>
              <section class="input_doc">
                  <label for="documento">Carga tu documento de identidad <span>*</span></label>
                  <label for="documento" id="custom-file-label" class="custom-file-label">Cargar documento</label>
                  <input type="file" name="documento" id="documento" style={{display:"none"}} />
              </section>

              {/* <!-- Contenedor mensaje de en caso de campos incompletos --> */}
              <div id="contMsg" class="contMsg">
                  <div class="contMsgCon" id="contMsgCon">
                      <div class="contMsgConIn" id="contMsgConIn">
                          <div id="contMsgConM" class="contMsgConM"></div>
                      </div>    
                  </div>
              </div>

              {/* <!-- Contenedor de botones de interaccion --> */}
              <section class="input_envio">
                  <button type="submit" id="envio" class="btn_enviar_form">Enviar</button>
                  <button id="borrar" class="btn_borrar"><u>Borrar formulario</u></button>
              </section>
          </div>
      </form>
    </div>
  );
};

export { ConsultationPolygon };