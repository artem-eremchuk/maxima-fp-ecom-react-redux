import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/actionCreators';
import ProductCard from '../components/ProductCard/ProductCard';
import Spinner from '../components/Spinner/Spinner';

function HomePage() {
  const { 
    products, 
    loading,
    isProductsLoaded,
  } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const searchText = useSelector((state) => state.searchProduct);
  const dispatch = useDispatch();
  
  const { 
    fetchProducts,
    compareCartAndProducts,
  } = bindActionCreators(actionCreators, dispatch);

  
  useEffect(() => {
    fetchProducts();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isProductsLoaded) {
      compareCartAndProducts(cart);
    }
  }, [isProductsLoaded]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading
        ? <Spinner /> 
        : products
            .filter(product => product.title
              .toLowerCase().includes(searchText))
              .map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                />
            ))
      }
    </>
  )
}

export default HomePage;