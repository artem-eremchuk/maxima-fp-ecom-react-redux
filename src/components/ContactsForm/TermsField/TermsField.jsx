import './TermsField.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/actionCreators';
import { useEffect } from 'react';

function TermsField() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTerms(checked)
    // eslint-disable-next-line
  }, [checked])
 
  const dispatch = useDispatch();
  const { isValid, error } = useSelector(state => state.contactsForm.terms);

  const { 
    setTerms,
    changeErrorParam
  } = bindActionCreators(actionCreators, dispatch);

  const handlerChange = () => {
    setChecked(prev => !prev);

    if (!error) {
      changeErrorParam('terms');
    }
  }

  return (
    <div className='terms-wrapper'>
      <label className='terms'>
        <input
          className='terms__input' 
          type="checkbox" 
          checked={checked}
          onChange={() => handlerChange()}
        />
        <div className="terms__checkbox"></div>
        <span className='terms__text'>Принимаю условия</span>
        <Link className='terms__link' to={'#'}>Пользовательского Соглашения</Link>
      </label>
      <div className="terms-check">
        <span className='terms-check__text'>
          {
            ((isValid && error) || (!isValid && !error))
              ? null 
              : 'Поле обязательно для заполнения'
          }
        </span>
      </div>
    </div>
  )
}

export default TermsField;