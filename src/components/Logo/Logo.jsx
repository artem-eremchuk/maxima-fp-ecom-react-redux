import './Logo.scss';
import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div>
      <Link to={'/'}>
        <img
          className='logo' 
          src={logo} 
          alt="logo"
        />
      </Link>
    </div>
  )
}

export default Logo;