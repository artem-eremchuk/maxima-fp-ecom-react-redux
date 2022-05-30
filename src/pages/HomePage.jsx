import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Link to={'/cart'}>Cart</Link>
    </>
  )
}

export default HomePage;