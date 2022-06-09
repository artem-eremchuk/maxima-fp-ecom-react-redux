import './EmailField.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/actionCreators';

function PasswordField() {
  const [ inputEmail, setInputEmail ] = useState('')
  
  const dispatch = useDispatch();
  const { isValid } = useSelector(state => state.contactsForm.email);

  const { 
    setEmail
  } = bindActionCreators(actionCreators, dispatch);

  const handlerChange = (e) => {
    setInputEmail(e.target.value );
    setEmail(e.target.value);
  }

  return (
    <div className='input-wrapper'>
      <label htmlFor="email"></label>
      <input 
        type="email" 
        name='email' 
        placeholder='Email' 
        autoComplete='off'
        className={isValid ? 'input' : 'input error'}
        value={inputEmail}
        onChange={(e) => handlerChange(e)}
      />
      <div className="input-check">
        <span className='input-check__text'>
          {isValid 
            ? null : 
            (inputEmail.length > 0) 
              ? 'Email введен неправильно' 
              : 'Поле обязательно для заполнения'
          }
        </span>
      </div>
    </div>
  )
}

export default PasswordField;