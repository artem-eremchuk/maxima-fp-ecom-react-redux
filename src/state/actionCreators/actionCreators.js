import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    const products = await axios.get('https://fakestoreapi.com/products');
    // console.log(products.data);

    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: products.data,
    })
  } 
}


export const selectProduct = (product) => {
  return {
    type: 'SELECT_PRODUCT',
    payload: product,
  }
}