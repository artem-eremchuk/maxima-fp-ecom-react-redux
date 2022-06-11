import './Header.scss';
import React from 'react';

import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className='header'>
      <div className="container">
        <div className="header-wrapper">
          <div className="header__logo">
            <Logo blockName="header"/>
            <h2 className="header__logo-text">Интернет-магазин</h2>
          </div>
          {
            (location.pathname === '/') ? <Search /> : null
          }
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header;