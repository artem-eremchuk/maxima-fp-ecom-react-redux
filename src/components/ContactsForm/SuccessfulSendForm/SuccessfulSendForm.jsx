import './SuccessfulSendForm.scss';
import successLogo from '../../../assets/images/success_2.gif';
import React from 'react';
import { useEffect } from 'react';

function SuccessfulSendForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []) 

  return (
    <div className='success'>
      <img
          className={'success-logo'} 
          src={successLogo} 
          alt="success-logo"
      />
    </div>
  )
}

export default SuccessfulSendForm;