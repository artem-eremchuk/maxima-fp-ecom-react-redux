import './ProductCard.scss';
import { Link } from 'react-router-dom';
import React from 'react';

function ProductCard({ product }) {
  const { id, image, title } = product;


  const handlerBtn = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <div className="product-card-container">
      <Link className="product-card" to={`product/${id}`}>
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