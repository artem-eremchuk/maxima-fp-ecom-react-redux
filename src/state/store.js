import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { 
  legacy_createStore as createStore, 
  applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);