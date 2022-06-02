import './Layout.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
        <main className='main'>
          <div className="container">
            <div className="main-wrapper">
              <Outlet />
            </div>
          </div>
        </main>
      <Footer />
    </>
  )
}

export default Layout;
