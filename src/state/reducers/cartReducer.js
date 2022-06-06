const ADD_TO_CART = 'ADD_TO_CART';
const INCREASE_PAYMENT = 'INCREASE_PAYMENT';
const DICREASE_PAYMENT = 'DICREASE_PAYMENT'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const initialState = JSON.parse(window.localStorage.getItem('cart')) || [];

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return [
        ...state,
        {
          ...action.payload,
          isInCart: !action.payload.isInCart,
          count: 1,
          payment: action.payload.price,
        }
      ]
    case INCREASE_PAYMENT:
      return state.map(purchase => {
        if(purchase.id === action.payload.id) {
          return {
            ...action.payload,
            count: action.payload.count + 1,
            payment: (action.payload.count + 1) * purchase.price,
          }
        } else {
          return purchase;
        }
      })  
    case DICREASE_PAYMENT:
      return state.map(purchase => {
        if(purchase.id === action.payload.id) {
          return {
            ...action.payload,
            count: action.payload.count - 1,
            payment: (action.payload.count - 1) * purchase.price,
          }
        } else {
          return purchase;
        }
      })    
    case REMOVE_FROM_CART:
      return state.filter(purchase => purchase.id !== action.payload.id);
    default: 
      return state;
  }
}

export default cartReducer;