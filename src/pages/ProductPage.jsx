import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product/Product';

function ProductPage() {
  const product = useSelector((state) => state.selectProduct);

  return <Product product={product}/>
}

export default ProductPage;