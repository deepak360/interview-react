import { FETCH_ARTICLES } from '../actions/index';

function articleReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
export default articleReducer;
