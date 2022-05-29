const initialState = [
  {
    id: 1,
    title: 'milk'
  },
  {
    id: 2,
    title: 'bread'
  },
  {
    id: 3,
    title: 'juice'
  },
]

const productsReducer = (state = initialState, action) => {
  switch(action.type) {  
    default:
      return state;
  }
}

export default productsReducer;