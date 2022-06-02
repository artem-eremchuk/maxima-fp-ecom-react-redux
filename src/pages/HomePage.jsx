import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';
import ProductCard from '../components/ProductCard/ProductCard';

function HomePage() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const { 
    fetchProducts,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
      {products.map(product => 
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      )}
    </>
  )
}

export default HomePage;