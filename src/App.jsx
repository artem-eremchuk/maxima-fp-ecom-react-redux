import './App.scss';
import React from 'react';
import { useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './state/index';

function App() {
  const products = useSelector((state) => state.products);

  // const { 
  //   depositMoney,
  //   withdrawMoney
  // } = bindActionCreators(actionCreators, dispatch);
 
  return (
    <div className="App">
      App 
      {products.map(product => <h1 key={product.id}>{product.title}</h1>)}
    </div>
  );
}

export default App;
