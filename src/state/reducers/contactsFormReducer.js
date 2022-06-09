// eslint-disable-next-line 
const REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; 
const SET_USERNAME = 'SET_USERNAME';
const SET_EMAIL = 'SET_EMAIL';
// const CHANGE_ERROR = 'CHANGE_ERROR';

const initState = {
  name: {
    value: '',
    isValid: false,
    error: false,
  },
  email: {
    value: '',
    isValid: false,
    error: false,
  }
}

const contactsFormReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_USERNAME:
      return {
        ...state,
        name: {
          ...state.name,
          value: action.payload,
          isValid: (action.payload.length === 0)
            ? false 
            : true,
        }
      }
    case SET_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload,
          isValid: (REGEX.test(String(action.payload).toLowerCase())) ? true : false,
        }
      }  
    default:
      return state;
  }
}

export default contactsFormReducer;