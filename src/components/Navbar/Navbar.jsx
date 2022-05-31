import './Navbar.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink 
        to={'/'} 
        className="navbar__link navbar__link-btn"
      >
        Главная
      </NavLink>
      <NavLink 
        to={'/contacts'} 
        className="navbar__link navbar__link-btn"
      >
        Контакты
      </NavLink>
      <NavLink 
        to={'/cart'} 
        className="navbar__link navbar__link-cart"
      >
        <FiShoppingCart className='navbar__link-cart-icon'/>
        <span className={
          true 
            ? 'navbar__link-cart-count' 
            : 'hidden'
        }
        >22</span>
      </NavLink>
    </nav>
  )
}

export default Navbar;