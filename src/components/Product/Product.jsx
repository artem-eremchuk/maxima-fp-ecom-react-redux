import './Product.scss';
import React from 'react';


function Product({ product }) {
  const { title, description, image, price } = product;

  return (
    <div className='product-wrapper'>
      <div className="product-img__wrapper">
        <div className="product-img__container">
          <img className='product-img' src={image} alt={title} />
        </div> 
      </div>
      <div className="product-info">
        <h2 className="product-info__title">{title}</h2>
        <p className="product-info__description">{description}</p>
        <h3 className="product-info__price">{`$ ${price}`}</h3>
        <button className="product-info__btn">В корзину</button>
        {/* <div>Empty</div> */}
      </div>
    </div>
  )
}

export default Product;