import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Festivals } from '../Festivals';
import { Home } from '../Home';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/festival" element={<Festivals />} />
    </Routes>
  );
};
