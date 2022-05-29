import './App.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/actionCreators';

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const { 
    fetchProducts,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])
 
  return (
    <div className="App">
      App 
      {products.map(product => <h1 key={product.id}>{product.title}</h1>)}
    </div>
  );
}

export default App;
