import React, { createContext, useState, useEffect } from "react";

export const SedeContext = createContext();

export const SedeProvider = ({ children }) => {
  // 1. Cargar sede guardada si existe
  const [sede, setSede] = useState(() => {
    return localStorage.getItem("sedeSeleccionada") || "Bogotá D.C.";
  });

  // 2. Guardar sede cada vez que cambie
  useEffect(() => {
    localStorage.setItem("sedeSeleccionada", sede);
  }, [sede]);

  return (
    <SedeContext.Provider value={{ sede, setSede }}>
      {children}
    </SedeContext.Provider>
  );
};
