import './SuccessfulSendForm.scss';
import successLogo from '../../../assets/images/success_2.gif';
import React from 'react';

function SuccessfulSendForm() {
  return (
    <div className='success'>
      <img
          className={'success-logo'} 
          src={successLogo} 
          alt="logo"
      />
    </div>
  )
}

export default SuccessfulSendForm;