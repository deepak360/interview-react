import axios from 'axios';
import config from '../../../config';
import { objectToFormData } from 'object-to-formdata';

export const FETCH_ALL = 'fetch_all';
export const fetchAll = source => dispatch => {
  let url;
  if (source) {
    url = `${config.localhost}${config.moduleId}product_by_category/1`;
  } else {
    url = `${config.localhost}${config.moduleId}product_by_category/1`;
  }

  const res = axios.get(url);
  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data
  });
};

export const FETCH_PRODUCTS = 'fetch_products';
export const fetchProducts = source => async dispatch => {
  let url;
  if (source) {
    url = `${config.localhost}${config.moduleId}products`;
  } else {
    url = `${config.localhost}${config.moduleId}products`;
  }

  const res = await axios.get(url);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: res.data
  });
};

export const FETCH_ARTICLES = 'fetch_articles';
export const fetchArticles = source => async dispatch => {
  let url;
  if (source) {
    url = `${config.localhost}${config.moduleId}product_by_category/${source}`;
  } else {
    url = `${config.localhost}${config.moduleId}product_by_category/${source}`;
  }

  const res = await axios.get(url);
  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data
  });
};

export const FETCH_CATEGORY = 'fetch_category';
export const fetchCategories = source => async dispatch => {
  let url;
  if (source) {
    url = `${config.localhost}${config.moduleId}categories`;
  } else {
    url = `${config.localhost}${config.moduleId}categories`;
  }

  const res = await axios.get(url);
  dispatch({
    type: FETCH_CATEGORY,
    payload: res.data
  });
};

export const FETCH_SUBCATEGORY = 'fetch_subcategory';
export const fetchSubCategories = source => async dispatch => {
  let url;
  if (source) {
    url = `${config.localhost}${config.moduleId}subcategory_by_category/${source}`;
  } else {
    url = `${config.localhost}${config.moduleId}subcategory_by_category/1`;
  }

  const res = await axios.get(url);
  dispatch({
    type: FETCH_SUBCATEGORY,
    payload: res.data
  });
};

export const POST_PRODUCT = 'post_product';
export const postProduct = source => async dispatch => {
  let url;
  if (source) {
    url = `${config.localhost}${config.moduleId}add_product`;
  } else {
    url = `${config.localhost}${config.moduleId}add_product`;
  }

  const res = await axios.post(url, source);

  let urlP;
  urlP = `${config.localhost}${config.moduleId}products`;

  const resP = await axios.get(urlP);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: resP.data
  });
};
