import './Navbar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link 
        to={'/'} 
        className="navbar__link navbar__link-btn"
      >
        Главная
      </Link>
      <Link 
        to={'/contacts'} 
        className="navbar__link navbar__link-btn"
      >
        Контакты
      </Link>
      <Link 
        to={'/cart'} 
        className="navbar__link navbar__link-cart"
      >
        <FiShoppingCart />
      </Link>
    </nav>
  )
}

export default Navbar;