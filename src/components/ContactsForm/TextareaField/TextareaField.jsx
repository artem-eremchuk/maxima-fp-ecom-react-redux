import './TextareaField.scss';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/actionCreators';

function TextareaField() {
  const [ textareaText, setTextareaText ] = useState('')

  const dispatch = useDispatch();
  const { isValid, error } = useSelector(state => state.contactsForm.textarea);

  const { 
    setTextarea,
    changeErrorParam
  } = bindActionCreators(actionCreators, dispatch);

  const handlerChange = (e) => {
    setTextareaText(e.target.value);
    setTextarea(e.target.value);

    if (!error) {
      changeErrorParam('textarea');
    }
  }

  return (
    <div className='textarea-wrapper'>
      <textarea 
        className={((isValid && error) || (!isValid && !error))  ? 'textarea' : 'textarea error'}
        placeholder='Введите сообщение'
        value={textareaText}
        onChange={(e) => handlerChange(e)}
      ></textarea>
      <div className="textarea-check">
        <span className='textarea-check__text'>
          {((isValid && error) || (!isValid && !error))
            ? null : 
            (textareaText.length === 0) 
              ? 'Поле обязательно для заполнения' 
              : 'Не более 255 символов'
          }
        </span>
      </div>
    </div>
  )
}

export default TextareaField;