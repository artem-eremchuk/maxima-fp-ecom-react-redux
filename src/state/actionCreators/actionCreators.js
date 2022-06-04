import axios from "axios";

export const changeIsInCartParam = (product) => {
  return {
    type: 'CHANGE_IS_IN_CART_PARAM',
    payload: product,
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART', 
    payload: product,
  }
}

export const searchProduct = (text) => {
  return {
    type: 'SEARCH_PRODUCT',
    payload: text,
  }
}

export const selectProduct = (product) => {
  return {
    type: 'SELECT_PRODUCT',
    payload: product,
  }
}

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' })

    try {
      const products = await axios.get('https://fakestoreapi.com/products');

      dispatch({ 
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products.data
      })
    } catch (error) {
      dispatch({ 
        type: 'FETCH_PRODUCTS_FAILURE',
        error
      })
    }
  } 
}
