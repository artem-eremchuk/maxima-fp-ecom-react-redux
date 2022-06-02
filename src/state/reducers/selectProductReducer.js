const SELECT_PRODUCT= 'SELECT_PRODUCT';

const initialState = JSON.parse(window.localStorage.getItem('product')) || {};

const selectProductReducer = (state = initialState, action) => {
  switch(action.type) {  
    case SELECT_PRODUCT:
      return {...action.payload};
    default:
      return state;
  }
}

export default selectProductReducer;