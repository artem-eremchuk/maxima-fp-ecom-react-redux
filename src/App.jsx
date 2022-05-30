import './App.scss';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './state/actionCreators';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactsPage from './pages/ContactsPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';

function App() {
  // const products = useSelector((state) => state.products);
  // const dispatch = useDispatch();

  // const { 
  //   fetchProducts,
  // } = bindActionCreators(actionCreators, dispatch);

  // useEffect(() => {
  //   fetchProducts();
  // }, [fetchProducts])
 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='product/:id' element={<ProductPage />} />
            <Route path='contacts' element={<ContactsPage />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
