import './Navbar.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function Navbar() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const { 
    searchProduct,
  } = bindActionCreators(actionCreators, dispatch);

  return (
    <nav className='navbar'>
      <NavLink 
        to={'/'} 
        className="navbar__link navbar__link-btn"
        onClick={() => searchProduct('')}
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
          (cart.length) 
            ? 'navbar__link-cart-count' 
            : 'hidden'
        }
        >{cart.length}</span>
      </NavLink>
    </nav>
  )
}

export default Navbar;