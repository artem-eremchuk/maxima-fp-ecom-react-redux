import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import selectProductReducer from './selectProductReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  selectProduct: selectProductReducer,
  searchProduct: searchReducer,
});

export default rootReducer;