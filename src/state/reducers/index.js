import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import selectProductReducer from './selectProductReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  selectProduct: selectProductReducer,
  searchProduct: searchReducer,
});

export default rootReducer;