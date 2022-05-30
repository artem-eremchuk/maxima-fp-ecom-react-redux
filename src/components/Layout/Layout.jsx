import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;
