const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

const searchReducer = (state = '', action) => {
  switch(action.type) {
    case SEARCH_PRODUCT:
      return action.payload.toLowerCase();
    default:
      return state;
  }
}

export default searchReducer;