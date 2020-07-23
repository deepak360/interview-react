import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import articleReducer from './usersReducer';
import categoryReducer from './categoryReducer';
import subcategoryReducer from './subcategoryReducer';

export default combineReducers({
  products: productsReducer,
  articles: articleReducer,
  categories: categoryReducer,
  subcategories: subcategoryReducer
});
