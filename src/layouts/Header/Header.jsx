import './Header.scss';
import React from 'react';

import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-wrapper">
          <div className="header__logo">
            <Logo blockName="header"/>
            <h2 className="header__logo-text">Интернет-магазин</h2>
          </div>
          <Search />
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header;