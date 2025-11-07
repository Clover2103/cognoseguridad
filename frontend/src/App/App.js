import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RouterPages } from '../App/Router';
import { SedeProvider } from "../context/SedeContext";  // <-- IMPORTANTE
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <SedeProvider>
        <HashRouter>
          <RouterPages />
        </HashRouter>
      </SedeProvider>
    </>
  );
}

export { App };

