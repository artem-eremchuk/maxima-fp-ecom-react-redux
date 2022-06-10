import './UsernameField.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/actionCreators';

function UsernameField() {
  const [ inputText, setInputText ] = useState('');
  
  const dispatch = useDispatch();
  const { isValid, error } = useSelector(state => state.contactsForm.name);

  // console.log(
  //   'isValid:', isValid,
  //   'error:', error, 
  // );

  const { 
    setUsername,
    changeErrorParam
  } = bindActionCreators(actionCreators, dispatch);

  const handlerChange = (e) => {
    setInputText(e.target.value );
    setUsername(e.target.value);

    if (!error) {
      changeErrorParam('name');
    }
  }

  return (
    <div className='input-wrapper'>
      <label htmlFor="username"></label>
      <input 
        type="text" 
        name='username' 
        placeholder='Имя' 
        autoComplete='off'
        className={((isValid && error) || (!isValid && !error))  ? 'input' : 'input error'}
        value={inputText}
        onChange={(e) => handlerChange(e)}
      />
      <div className="input-check">
        <span className='input-check__text'>
          {((isValid && error) || (!isValid && !error))
            ? null
            : 'Поле обязательно для заполнения'
          }
        </span>
      </div>
    </div>
  )
}

export default UsernameField;