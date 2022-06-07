import './Button.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function Button({ product }) {
  const { id } = product;

  const products = useSelector(state => state.products.products);
  const isInCart = products.find(product => product.id === id).isInCart

  const dispatch = useDispatch();

  const { 
    addToCart,
    removeFromCart,
    changeIsInCartParam,
  } = bindActionCreators(actionCreators, dispatch);
  
  const handlerToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(!isInCart) {
      addToCart(product);
      changeIsInCartParam(product);
    } else {
      removeFromCart(product);
      changeIsInCartParam(product);
    }
  }

  return (
    <button 
      className={
        (!isInCart) ? 'btn btn-not-in-cart' : 'btn btn-in-cart'
      }
      onClick={(e) => handlerToggle(e)}
    >
      {(!isInCart) ? 'В корзину' : 'Убрать'}
    </button>
  )
}

export default Button;