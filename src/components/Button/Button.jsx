import './Button.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function Button({ product }) {
  const { isInCart } = product;
  const dispatch = useDispatch();

  const { 
    addToCart,
    changeIsInCartParam,
  } = bindActionCreators(actionCreators, dispatch);
  
  const handlerToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    changeIsInCartParam(product);
  }

  return (
    <button 
      className={
        !isInCart ? 'btn btn-not-in-cart' : 'btn btn-in-cart'
      }
      onClick={(e) => handlerToggle(e)}
    >
      {!isInCart ? 'В корзину' : 'Убрать'}
    </button>
  )
}

export default Button;