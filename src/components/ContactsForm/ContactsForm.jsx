import './ContactsForm.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';
import { useState, useEffect } from 'react';
import UsernameField from './UsernameField/UsernameField';
import EmailField from './EmailField/EmailField';
import RadioButtonsField from './RadioButtonsField/RadioButtonsField';
import TextareaField from './TextareaField/TextareaField';
import TermsField from './TermsField/TermsField';
import SuccessfulSendForm from './SuccessfulSendForm/SuccessfulSendForm';

function ContactsForm() {
  const [ isValid, setIsValid ] = useState(false)
  const contactsForm = useSelector(state => state.contactsForm);
  const dispatch = useDispatch();

  const { 
    turnOnAllErrors,
    clearForm
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    window.scrollTo(0, 0);
    clearForm();
    // eslint-disable-next-line
  }, [])

  const sendToServer = (form) => {
    const objectToServer = Object.keys(form).reduce((acc, key) => ({
      ...acc,
      [key]: form[key].value
     }), {})

     console.log(JSON.stringify(objectToServer));
  }

  const handlerSubmit =  (e) => {
    e.preventDefault();
    
    const valid = Object.values(contactsForm).every(field => field.isValid);
    
    if(valid) {
      setIsValid(true);
      clearForm();
      sendToServer(contactsForm);
    } else {
      turnOnAllErrors();
    }
  }

  return (
    <form 
      className='contacts-form' 
      onSubmit={(e) => handlerSubmit(e)}
    >
      <h3 className='contacts-form__title'>
        {(!isValid) ? 'Обратная связь' : 'Отправка прошла успешно!'}
      </h3>
      {(!isValid)
          ? <div className="contacts-form__fields">
              <UsernameField />
              <EmailField />
              <RadioButtonsField />
              <TextareaField />
              <TermsField />
            </div>
          : <SuccessfulSendForm />
      }
      {
        (!isValid)
          ? <button 
              className='contacts-form__submit'
              type='submit'
            >
              Отправить
            </button>
          : null  
      }
    </form>
  )
}

export default ContactsForm;