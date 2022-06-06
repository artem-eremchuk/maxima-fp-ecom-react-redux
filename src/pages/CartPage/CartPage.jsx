import './CartPage.scss';
import React from 'react';
import CartCard from '../../components/CartCard/CartCard';
import { useSelector } from 'react-redux';


function CartPage() {
  const cart = useSelector(state => state.cart);

  return (
    <div className='cart-wrapper'>
      <ul className="cart-list">
        {cart.map(purchese => <CartCard key={purchese.id} product={purchese} />)}
      </ul>
      <div className="cart-total"></div>
    </div>
  )
}

export default CartPage;