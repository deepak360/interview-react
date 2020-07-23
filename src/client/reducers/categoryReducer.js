import { FETCH_CATEGORY } from '../actions/index';

function categoryReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return action.payload;

    default:
      return state;
  }
}
export default categoryReducer;
