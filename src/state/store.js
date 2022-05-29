import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { 
  legacy_createStore as createStore, 
  applyMiddleware
} from 'redux';

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
);