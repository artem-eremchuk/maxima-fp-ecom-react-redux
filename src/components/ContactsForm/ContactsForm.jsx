import './ContactsForm.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import UsernameField from './UsernameField/UsernameField';
import EmailField from './EmailField/EmailField';
import RadioButtonsField from './RadioButtonsField/RadioButtonsField';

function Form() {
  const contactsForm = useSelector(state => state.contactsForm);

  const handlerSubmit =  (e) => {
    e.preventDefault();
    const fileds = [];

    for (let filed in contactsForm) {
      fileds.push(contactsForm[filed])
    }

    const result = fileds.every(filed => filed.isValid);

    if(result) {
      console.log(contactsForm);
    }
  }

  return (
    <form 
      className='contacts-form' 
      onSubmit={(e) => handlerSubmit(e)}
    >
      <h3 className='contacts-form__title'>
        Обратная связь
      </h3>
      <UsernameField />
      <EmailField />
      <RadioButtonsField />
      <button 
        className='contacts-form__submit'
        type='submit'
        // disabled="true"
      >
        Отправить
      </button>
    </form>
  )
}

export default Form;