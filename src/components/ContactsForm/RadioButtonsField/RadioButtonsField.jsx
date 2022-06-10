import './RadioButtonsField.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/actionCreators';

function RadioButtonsField() {
  const dispatch = useDispatch();

  const { 
    setSex
  } = bindActionCreators(actionCreators, dispatch);

  const handlerChange = (e) => {
    setSex(e.target.value);
  }

  return (
    <> 
      <div className='radio-buttons-wrapper'>
        <h3 className='radio-buttons__title'>Пол</h3>
        <label className="radio-button">
          <input 
            className='radio-button__input'
            type="radio"
            name='sex'
            value={'man'}
            onChange={(e) => handlerChange(e)} 
          />
          <div className='radio-button__radio'></div>
          <span className='radio-button__title'>Мужчина</span>
        </label>
        <label className="radio-button">
          <input 
            className='radio-button__input'
            type="radio"
            name='sex'
            value={'woman'}
            onChange={(e) => handlerChange(e)} 
          />
          <div className='radio-button__radio'></div>
          <span className='radio-button__title'>Женщина</span>
        </label>
      </div>
    </>
  )
}

export default RadioButtonsField;