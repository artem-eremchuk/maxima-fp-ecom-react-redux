import './Layout.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from '../../state/actionCreators';

function Layout() {
  // const dispatch = useDispatch();

  // const { 
  //   fetchProducts,
  //   // compareCartAndProducts,
  // } = bindActionCreators(actionCreators, dispatch);

  // useEffect(() => {
  //   fetchProducts();
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      <Header />
        <main className='main'>
          <div className="container">
            <div className="main-wrapper">
              <Outlet />
            </div>
          </div>
        </main>
      <Footer />
    </>
  )
}

export default Layout;
