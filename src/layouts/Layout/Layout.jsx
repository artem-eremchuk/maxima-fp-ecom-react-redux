import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
