import './CartPage.scss';
import React, { useEffect } from 'react';
import CartCard from '../../components/CartCard/CartCard';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
// import { actionCreators } from '../../state/actionCreators';
// import { bindActionCreators } from 'redux';


function CartPage() {
  const cart = useSelector(state => state.cart);
  // const {cart, isProductsLoaded} = useSelector(state => state);
  // const dispatch = useDispatch();

  // const { 
  //   fetchProducts,
  //   compareCartAndProducts,
  // } = bindActionCreators(actionCreators, dispatch);

  // useEffect(() => {
  //   fetchProducts();
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   if (isProductsLoaded) {
  //     compareCartAndProducts(cart);
  //   }
  // }, [isProductsLoaded]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if(!cart.length) {
      localStorage.removeItem('cart');
    }
  }, [cart])

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
      </div>
    </div>
  )
}

export default CartPage;