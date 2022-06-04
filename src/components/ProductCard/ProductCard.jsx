import './ProductCard.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function ProductCard({ product }) {
  const { id, image, title } = product;
  const dispatch = useDispatch();

  const { 
    selectProduct,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const handlerBtn = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <div className="product-card-container">
      <Link 
        className="product-card" 
        to={`product/${id}`}
        onClick={() => selectProduct(product)}
      >
        <div className="product-card__img-wrapper">
          <img className='product-card__img' src={image} alt="product-card" />
        </div>
        <div className="product-card__info">
          <h2 className="product-card__info-title">{title}</h2>
        </div>
        <div className="product-card__btn-wrapper">
          <button 
            className="product-card__btn"
            onClick={handlerBtn}
          >
            В корзину
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;