import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import selectProductReducer from './selectProductReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectProductReducer,
});

export default rootReducer;