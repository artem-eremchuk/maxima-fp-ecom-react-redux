const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
const CHANGE_IS_IN_CART_PARAM = 'CHANGE_IS_IN_CART_PARAM';
const COMPARE_CART_AND_PRODUCTS = 'COMPARE_CART_AND_PRODUCTS';

const initialState = {
  products: [],
  loading: false,
  error: null, 
  isProductsLoaded: null
}

const productsReducer = (state = initialState, action) => {
  switch(action.type) {  
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        isProductsLoaded: false,
        error: null,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isProductsLoaded: true,
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
        isProductsLoaded: false,
        error: action.error,
      }  
    case CHANGE_IS_IN_CART_PARAM: 
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id){
            product.isInCart = !product.isInCart;
            return product;
          }
          return product;
        })
      }
    case COMPARE_CART_AND_PRODUCTS:
      const cart = [...action.payload];

      return {
        ...state,
        products: state.products.map(product => 
          (cart.length === 0 || cart === null) 
            ? product 
            : (cart.find(purchase => purchase.id === product.id))
              ? {
                ...product,
                isInCart: !product.isInCart
              }
              : product
        )
      }
    default:
      return state;
  }
}

export default productsReducer;