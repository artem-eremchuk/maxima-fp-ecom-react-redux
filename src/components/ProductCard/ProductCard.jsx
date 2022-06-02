import './ProductCard.scss';
import { Link } from 'react-router-dom';
import React from 'react';

function ProductCard({ product }) {
  const { id, image, title } = product;

  return (
    <div className="product-card-container">
      <Link className="product-card" to={`product/:${id}`}>
        <div className="product-card__img-wrapper">
          <img className='product-card__img' src={image} alt="product-card" />
        </div>
        <div className="product-card__info">
          <h2 className="product-card__info-title">{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;