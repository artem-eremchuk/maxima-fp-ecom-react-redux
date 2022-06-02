const SELECT_PRODUCT= 'SELECT_PRODUCT';

const selectProductReducer = (state = {}, action) => {
  switch(action.type) {  
    case SELECT_PRODUCT:
      return {...action.payload};
    default:
      return state;
  }
}

export default selectProductReducer;