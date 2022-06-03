import './Spinner.scss';
import spinner from '../../assets/images/spinner-planets.gif';
import React from 'react';

function Spinner() {
  return (
    <div className='spinner-wrapper'>
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner;