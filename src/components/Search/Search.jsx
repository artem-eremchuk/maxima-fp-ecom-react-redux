import './Search.scss';
import React from 'react';

function Search() {
  return (
    <>
      <input 
        type="text" 
        className='search'
        placeholder='Поиск товара' 
      />
    </>
  )
}

export default Search;