import './CartPage.scss';
import React from 'react';
import CartCard from '../../components/CartCard/CartCard';
import { useSelector } from 'react-redux';

function CartPage() {
  const cart = useSelector(state => state.cart);

  const sendToServer = (cart) => {
    console.log(JSON.stringify(cart));
  }

  return (
    <div className='cart-wrapper'>
      <ul className="cart-list">
        {(!cart.length) 
          ? <div className="cart-empty">
              <h2 className="cart-empty-title">
                Корзина пуста
              </h2>
              <p className="cart-empty-text">
                Воспользуйтесь поиском, чтобы найти всё что нужно.
              </p>
            </div>
          : cart.map(purchese => <CartCard key={purchese.id} product={purchese} />)
        }
      </ul>
      <div className="cart-total">
        <h3 className="cart-total__title">Корзина</h3>
        <div className="cart-total__products-count">
          Количество покупок: 
          {` ${
            cart.reduce((total, purchase) => total + purchase.count, 0)
          }`}
        </div>
        <div className="cart-total__sum">
          Итоговая сумма:
          {` $${
            cart.reduce((total, purchase) => total + purchase.payment, 0).toFixed(2)
          }`}
        </div>
        <button 
          className='cart-total__btn'
          onClick={() => sendToServer(cart)}
        >
          Оплатить
        </button>
      </div>
    </div>
  )
}

export default CartPage;