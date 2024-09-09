import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { RouterPages } from '../App/Router';
import './App.css';


function App() {
  return (
    <>
      <HashRouter>
        <RouterPages />
      </HashRouter>
    </>
  );
}

export default App;
