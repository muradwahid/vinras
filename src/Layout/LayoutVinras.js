import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../Router/Footer';

const LayoutVinras = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default LayoutVinras;