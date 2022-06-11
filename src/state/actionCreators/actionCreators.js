import axios from "axios";

export const clearForm = () => {
  return {
    type: 'CLEAR_FORM',
  }
}

export const turnOnAllErrors = () => {
  return {
    type: 'TURN_ON_ALL_ERRORS',
  }
}

export const setTerms = (check) => {
  return {
    type: 'SET_TERMS',
    payload: check,
  }
}

export const setTextarea = (text) => {
  return {
    type: 'SET_TEXTAREA',
    payload: text,
  }
}

export const setSex = (value) => {
  return {
    type: 'SET_SEX', 
    payload: value,
  }
}

export const changeErrorParam = (key) => {
  return {
    type: 'CHANGE_ERROR_PARAM',
    payload: key
  }
}

export const setUsername = (text) => {
  return {
    type: 'SET_USERNAME',
    payload: text,
  }
}

export const setEmail = (email) => {
  return {
    type: 'SET_EMAIL',
    payload: email,
  }
} 

export const categoryFilter = (category) => {
  return {
    type: 'CATEGORY_FILTER',
    payload: category,
  }
}

export const dicreasePayment = (product) => {
  return {
    type: 'DICREASE_PAYMENT',
    payload: product,
  }
}

export const increasePayment = (product) => {
  return {
    type: 'INCREASE_PAYMENT',
    payload: product,
  }
}

export const compareCartAndProducts = (cart) => {
  return {
    type: 'COMPARE_CART_AND_PRODUCTS',
    payload: cart,
  }
}

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

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART', 
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
