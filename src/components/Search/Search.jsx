import './Search.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

function Search() {
  const [ searchText, setSearchText ] = useState('');
  const dispatch = useDispatch();

  const { 
    searchProduct,
  } = bindActionCreators(actionCreators, dispatch);

  const handlerSearchText = (text) => {
    setSearchText(text);
    searchProduct(text);
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    setSearchText('');
    // searchProduct('');
  }

  return (
    <>
      <form className='form' onSubmit={handlerSubmit}>
        <input 
          type="text" 
          className='search'
          placeholder='Поиск товара' 
          value={searchText}
          onChange={(e) => handlerSearchText(e.target.value)}
        />
      </form>
    </>
  )
}

export default Search;