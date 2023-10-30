import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;
