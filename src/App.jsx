import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactsPage from './pages/ContactsPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Router basename='/maxima-fp-ecom-react-redux'>
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
