const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
const CHANGE_IS_IN_CART_PARAM = 'CHANGE_IS_IN_CART_PARAM';

const initialState = {
  products: [],
  loading: false,
  error: null
}

const productsReducer = (state = initialState, action) => {
  switch(action.type) {  
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.map((product) => {
          return {
            ...product,
            isInCart: false,
          }
        }),
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }  
    case CHANGE_IS_IN_CART_PARAM:
      const { products } = state;
      const prod = {...action.payload};

      return {
        ...state,
        products: products.map(product => {
          if (product.id === prod.id){
            product.isInCart = !product.isInCart;
            return product;
          }
          return product;
        })
      }
    default:
      return state;
  }
}

export default productsReducer;