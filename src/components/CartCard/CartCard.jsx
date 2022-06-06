import './CartCard.scss';
import React, { useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function CartCard({ product }) {
  const { id, title, image, count, payment } = product;

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);
  const isInCart = products.find(product => product.id === id).isInCart; 
  const cart = useSelector(state => state.cart);
  
  const { 
    removeFromCart,
    changeIsInCartParam,
    increasePayment,
    dicreasePayment,
  } = bindActionCreators(actionCreators, dispatch);
  
  useEffect(() => {
    if(isInCart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } 
  }, [cart, isInCart])
  
  const deleteFromCart = () => {
    removeFromCart(product);
    changeIsInCartParam(product);
  }

  const handlerIncrement = () => {
    if(count < product.rating.count) {
      increasePayment(product);
    }
  }

  const handlerDicrement = () => {
    if(1 < count) {
      dicreasePayment(product);
    }
  }

  return (
    <li className="item">
      <div className="item-img">
        <img src={image} alt={title} />
      </div>
      <div className="item-description">
        <h3 className="item-description-title">{title}</h3>
        <div className="item-description-price">
          {`$${Number(payment).toFixed(2)}`}
        </div>
      </div>
      <div className="item-count">
        <button 
          className="item-count-btn"
          onClick={() => handlerDicrement()}
        >-</button>
        <div className="item-count-field">
          {
            (1 <= count && count < product.rating.count) ? count : 1
          }
        </div>
        <button 
          className="item-count-btn"
          onClick={() => handlerIncrement()}
        >+</button>
        <button 
          className="item-count-btn item-count-btn__delete"
          onClick={() => deleteFromCart() }
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default CartCard;