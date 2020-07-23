import { FETCH_SUBCATEGORY } from '../actions/index';

function subcategoryReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SUBCATEGORY:
      return action.payload;

    default:
      return state;
  }
}
export default subcategoryReducer;
