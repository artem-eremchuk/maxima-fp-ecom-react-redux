import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import selectProductReducer from './selectProductReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';
import contactsFormReducer from './contactsFormReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  selectProduct: selectProductReducer,
  searchProduct: searchReducer,
  contactsForm: contactsFormReducer,
});

export default rootReducer;