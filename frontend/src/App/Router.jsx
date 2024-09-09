import React from "react";
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

const RouterPages = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </HashRouter>
  );
};

export { RouterPages }