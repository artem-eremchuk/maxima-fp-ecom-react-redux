import './Button.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function Button({ product }) {
  const { isInCart } = product;

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    if(isInCart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, isInCart])

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
      localStorage.removeItem('cart');
    }

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