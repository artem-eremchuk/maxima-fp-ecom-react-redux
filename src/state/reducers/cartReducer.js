const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const cartReducer = (state = [], action) => {
  switch(action.type){
    case ADD_TO_CART:
      const product = {...action.payload};
      product.isInCart = !product.isInCart;

      return [
        ...state,
        product
      ]
    case REMOVE_FROM_CART:
      return state;
    default: 
      return state;
  }
}

export default cartReducer;