import axios from "axios";

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
