import React, { useState, useRef, useEffect, useContext } from "react";
import "./ChatWidget.css";
import { IoChatbubblesSharp, IoClose } from "react-icons/io5";
import { SedeContext } from "../../context/SedeContext";
import { sedesData } from "../../data/sedesData";

/* =====================================================
   ÁRBOL DEL CHATBOT CON SUBMENÚ FINAL
===================================================== */



/* =====================================================
COMPONENTE PRINCIPAL
===================================================== */

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "¡Hola 👋! Soy tu asistente virtual.\n" +
        "Responde escribiendo solo el número de la opción.\n\n" +
        "1. Información general\n" +
        "2. Cursos y programas\n" +
        "3. Certificados y trámites\n" +
        "4. Requisitos de ingreso\n" +
        "5. Costos y pagos\n" +
        "6. Modalidades\n" +
        "7. Contacto y WhatsApp\n" +
        "9. Salir"
    }
  ]);
  const { sede } = useContext(SedeContext);
  const info = sedesData[sede];

  const [currentMenu, setCurrentMenu] = useState(null);
  const [awaitingFinal, setAwaitingFinal] = useState(false);
  const [input, setInput] = useState("");

  const chatbotTree = {
    "1": {
      titulo: "Información general sobre formación",
      opciones: {
        "1": "¿Puedo capacitarme sin ser bachiller?",
        "2": "¿Cuánto dura un curso presencial?",
        "3": "¿Qué necesito para iniciar?",
        "4": "¿Desde qué edad puedo estudiar?",
        "5": "¿Los cursos tienen validez nacional?"
      },
      respuestas: {
        "1": "Sí, puedes capacitarte sin ser bachiller. Solo necesitas tu cédula.",
        "2": "Una semana completa.",
        "3": "Solo tu cédula y la disposición para formarte.",
        "4": "Debes ser mayor de 18 años para iniciar formación en vigilancia.",
        "5": "Sí, los cursos tienen validez nacional y cumplen normativas."
      }
    },

    "2": {
      titulo: "Cursos y programas",
      opciones: {
        "1": "Ver lista completa de cursos",
        "2": "¿Qué curso debo tomar primero?",
        "3": "Diferencia entre Vigilancia fija y Móvil",
        "4": "Cursos para ascensos"
      },
      respuestas: {
        "1": "Cursos: Vigilancia, Escolta, Medios Tecnológicos, Supervisor, Reentrenamientos.",
        "2": "El curso base para iniciar es Vigilancia.",
        "3": "Fija = puesto determinado. Móvil = patrullaje en zonas.",
        "4": "Puedes tomar Supervisor, Coordinador o especializaciones."
      }
    },

    "3": {
      titulo: "Certificados y trámites",
      opciones: {
        "1": "Tiempo de entrega de reentrenamiento",
        "2": "Solicitar copia del certificado",
        "3": "¿Cómo descargo mi certificado?",
        "4": "¿Qué hacer si mi certificado tiene un error?"
      },
      respuestas: {
        "1": "Entrega inmediata después del pago.",
        "2": "Tiene un valor de $20.000 y la entrega es inmediata.",
        "3": "Tu certificado virtual se puede consultar desde pagina.",
        "4": "Contáctanos por WhatsApp para corregirlo."
      }
    },

    "4": {
      titulo: "Requisitos de ingreso",
      opciones: {
        "1": "Documentos necesarios",
        "2": "Requisitos para virtualidad",
        "3": "Exámenes médicos",
        "4": "Antecedentes"
      },
      respuestas: {
        "1": "Solo necesitas tu cédula.",
        "2": "Internet, computador/celular y correo electrónico.",
        "3": "No son necesarios para cursos básicos.",
        "4": "Para algunos empleos sí, pero no para estudiar."
      }
    },

    "5": {
      titulo: "Costos y pagos",
      opciones: {
        "1": "Valor de los cursos",
        "2": "Medios de pago disponibles",
        "3": "¿Puedo pagar por cuotas?",
        "4": "¿Aceptan pagos desde otro país?"
      },
      respuestas: {
        "1": "Los precios varían según el programa.",
        "2": "Efectivo, transferencia y consignación.",
        "3": "Dependiendo del curso se puede pactar.",
        "4": "Sí, aceptamos pagos internacionales."
      }
    },

    "6": {
      titulo: "Modalidades (Presencial / Virtual)",
      opciones: {
        "1": "¿Se puede realizar el curso virtual?",
        "2": "¿Cómo funciona la plataforma virtual?",
        "3": "¿Puedo combinar presencial + virtual?"
      },
      respuestas: {
        "1": "Sí, contamos con un portafolio virtual.",
        "2": "Estudias contenidos y presentas evaluaciones online.",
        "3": "Algunos cursos permiten combinar modalidades."
      }
    },

    "7": {
      titulo: "Contacto y WhatsApp",
      opciones: {
        "1": "Enviar información a un asesor",
        "2": "Número de WhatsApp",
        "3": "Ubicación física"
      },
      respuestas: {
        "1": "Te envío con nuestro asesor vía WhatsApp...",
        "2": `+57 ${info.celular}`,
        "3": `${info.direccion}`
      }
    }
  };

  // Submenú común final
  const finalMenu = {
    "1": "Volver al menú anterior",
    "2": "Volver al menú principal",
    "3": "Salir"
  };

  /* =====================================================
     REFERENCIA PARA SCROLL AUTOMÁTICO
  ====================================================== */
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const showMainMenu = () => {
    setCurrentMenu(null);
    setAwaitingFinal(false);

    setMessages((p) => [
      ...p,
      {
        from: "bot",
        text:
          "Menú principal:\n\n" +
          "1. Información general\n" +
          "2. Cursos y programas\n" +
          "3. Certificados y trámites\n" +
          "4. Requisitos de ingreso\n" +
          "5. Costos y pagos\n" +
          "6. Modalidades\n" +
          "7. Contacto y WhatsApp\n" +
          "9. Salir"
      }
    ]);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((p) => [...p, { from: "user", text: userMsg }]);
    setInput("");

    // Salida global
    if (userMsg === "9") {
      setMessages((p) => [
        ...p,
        { from: "bot", text: "Gracias por usar el asistente. ¡Hasta pronto!" }
      ]);
      setCurrentMenu(null);
      setAwaitingFinal(false);
      return;
    }

    /* =====================================================
       MANEJO DEL MENÚ FINAL
    ====================================================== */
    if (awaitingFinal) {
      if (userMsg === "1") {
        setAwaitingFinal(false);

        const submenu = chatbotTree[currentMenu];
        const text =
          `📌 *${submenu.titulo}*\n\n` +
          Object.entries(submenu.opciones)
            .map(([n, t]) => `${n}. ${t}`)
            .join("\n") +
          "\n\n0. Volver al menú principal";

        setMessages((p) => [...p, { from: "bot", text }]);
        return;
      }

      if (userMsg === "2") {
        showMainMenu();
        return;
      }

      if (userMsg === "3") {
        setMessages((p) => [
          ...p,
          { from: "bot", text: "Gracias por usar el asistente. ¡Hasta pronto!" }
        ]);
        setCurrentMenu(null);
        setAwaitingFinal(false);
        return;
      }

      setMessages((p) => [
        ...p,
        { from: "bot", text: "❌ Opción inválida. Usa 1, 2 o 3." }
      ]);
      return;
    }

    /* =====================================================
       MENÚ PRINCIPAL
    ====================================================== */
    if (!currentMenu) {
      if (chatbotTree[userMsg]) {
        setCurrentMenu(userMsg);

        const submenu = chatbotTree[userMsg];
        const submenuText =
          `📌 *${submenu.titulo}*\n\n` +
          Object.entries(submenu.opciones)
            .map(([num, txt]) => `${num}. ${txt}`)
            .join("\n") +
          "\n\n0. Volver al menú principal";

        setMessages((p) => [...p, { from: "bot", text: submenuText }]);
      } else {
        setMessages((p) => [
          ...p,
          { from: "bot", text: "❌ Opción no válida. Intenta nuevamente." }
        ]);
      }
      return;
    }

    /* =====================================================
       Opción 0 desde submenu
    ====================================================== */
    if (userMsg === "0") {
      showMainMenu();
      return;
    }

    /* =====================================================
       RESPUESTAS DEL SUBMENÚ
    ====================================================== */
    const submenu = chatbotTree[currentMenu];

    // 🚀 Redirección automática a WhatsApp para menú 7 opción 1
    if (currentMenu === "7" && userMsg === "1") {
      window.open(
        `${info.whatsApp}&text=Hola, vengo de la página web desde la sede de ${sede} y quiero recibir información.`,
        "_blank"
      );
    }

    if (submenu.respuestas[userMsg]) {
      const respuesta = submenu.respuestas[userMsg];

      setMessages((p) => [...p, { from: "bot", text: respuesta }]);

      // Mostrar submenú B1
      const finalText =
        Object.entries(finalMenu)
          .map(([n, t]) => `${n}. ${t}`)
          .join("\n");

      setMessages((p) => [...p, { from: "bot", text: finalText }]);
      setAwaitingFinal(true);
      return;
    }

    setMessages((p) => [
      ...p,
      { from: "bot", text: "❌ Esa opción no existe en este menú." }
    ]);
  };

  return (
    <>
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        <IoChatbubblesSharp size={28} color="#fff" />
      </button>

      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <div>
            <h4>Asistente virtual</h4>
            <label className="status">🟢 En línea</label>
          </div>

          <IoClose size={26} className="close-icon" onClick={() => setIsOpen(false)} />
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.from === "bot" ? "bot" : "user"}`}>
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Escribe tu número..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="send-btn" onClick={sendMessage}>➤</button>
        </div>
      </div>
    </>
  );
};

export { ChatWidget };
