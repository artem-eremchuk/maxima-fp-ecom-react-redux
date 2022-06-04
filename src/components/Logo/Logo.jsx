import './Logo.scss';
import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function Logo({ blockName }) {
  const dispatch = useDispatch();

  const { 
    searchProduct,
  } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <Link 
        to={'/'}
        onClick={() => searchProduct('')}
      >
        <img
          className={`logo-${blockName}`} 
          src={logo} 
          alt="logo"
        />
      </Link>
    </div>
  )
}

export default Logo;