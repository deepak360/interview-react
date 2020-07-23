import { FETCH_PRODUCTS, POST_PRODUCT } from '../actions/index';

function productsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;

    case POST_PRODUCT:
      return [...state, action.payload];

    default:
      return state;
  }
}
export default productsReducer;
