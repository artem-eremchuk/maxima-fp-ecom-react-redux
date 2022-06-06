import './CartCard.scss';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function CartCard({ product }) {
  const { title, price, image } = product;

  const dispatch = useDispatch();

  const { 
    removeFromCart,
    changeIsInCartParam
  } = bindActionCreators(actionCreators, dispatch);

  const deleteFromCart = () => {
    removeFromCart(product);
    changeIsInCartParam(product);
  }

  return (
    <li className="item">
      <div className="item-img">
        <img src={image} alt={title} />
      </div>
      <div className="item-description">
        <h3 className="item-description-title">{title}</h3>
        <div className="item-description-price">{`$${price}`}</div>
      </div>
      <div className="item-count">
        <button className="item-count-btn">-</button>
        <div className="item-count-field">1</div>
        <button className="item-count-btn">+</button>
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