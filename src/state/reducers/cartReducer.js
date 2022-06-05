const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const initialState = JSON.parse(window.localStorage.getItem('cart')) || [];

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:
      const product = {...action.payload};
      product.isInCart = !product.isInCart;

      return [
        ...state,
        product
      ]
    case REMOVE_FROM_CART:
      return state.filter(purchase => purchase.id !== action.payload.id);
    default: 
      return state;
  }
}

export default cartReducer;