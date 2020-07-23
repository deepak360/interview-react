/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import {
  fetchProducts,
  fetchArticles,
  fetchCategories,
  fetchSubCategories,
  postProduct
} from '../actions';
import useForm from '../components/useForm';

const HomePage = props => {
  const { values, handleChange, handleSubmit } = useForm(createProductForm);
  const [data, setData] = useState(0);

  function createProductForm() {
    props.postProduct(values);
  }
  function getSubcategory(value) {
    props.fetchSubCategories(value);
  }

  function twoCalls(e) {
    handleChange(e);
    getSubcategory(e.target.value);
  }

  const renderArticles = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>Product</th>
                <th>SubCategory</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {props.products
                ? props.products.map((product, index) => (
                    <tr key={index + 1}>
                      <td>
                        <input
                          type="checkbox"
                          name="tick"
                          style={{ opacity: 1, position: 'relative' }}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.subcategory.name}</td>
                      <td>{product.category.name}</td>
                    </tr>
                  ))
                : ''}

              <tr>
                <td>
                  <input
                    type="submit"
                    name="save"
                    className="btn btn-success"
                    value="save"
                    style={{ opacity: 1, position: 'relative' }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    style={{ opacity: 1, position: 'relative' }}
                    value={values.name}
                    onChange={handleChange}
                    required
                  />
                </td>
                <td>
                  <select
                    name="subcategory"
                    style={{ opacity: 1, position: 'relative', display: 'block' }}
                    value={values.subcategory}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select SubCategory</option>
                    {props.subcategories
                      ? props.subcategories.map(subcategory => (
                          <option value={subcategory.id}>{subcategory.name}</option>
                        ))
                      : ''}
                  </select>
                </td>
                <td>
                  <select
                    name="category"
                    style={{ opacity: 1, position: 'relative', display: 'block' }}
                    value={values.category}
                    onChange={twoCalls}
                    required
                  >
                    <option value="">Select Category</option>
                    {props.categories
                      ? props.categories.map(category => (
                          <option value={category.id}>{category.name}</option>
                        ))
                      : ''}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </>
    );
  };

  const {
    fetchProducts: loadProducts,
    fetchArticles: loadArticles,
    fetchCategories: loadCategories,
    fetchSubCategories: loadSubCategories
  } = props;

  useEffect(() => {
    loadArticles(1);
    loadProducts();
    loadCategories();
  }, [data]);

  return (
    <div>
      <div className="row">
        <div className="section">
          <h3>Products</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderArticles()}</div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    fetchArticles: () => {
      dispatch(fetchArticles(1));
    },
    fetchCategories: () => {
      dispatch(fetchCategories());
    },
    fetchSubCategories: value => {
      dispatch(fetchSubCategories(value));
    },
    postProduct: productdata => {
      dispatch(postProduct(productdata));
    }
  };
};

const mapStateToProps = state => {
  return {
    products: state.products,
    articles: state.articles,
    categories: state.categories,
    subcategories: state.subcategories
  };
};

HomePage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  fetchProducts: PropTypes.func,
  articles: PropTypes.arrayOf(PropTypes.any),
  fetchArticles: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.any),
  fetchCategories: PropTypes.func,
  subcategories: PropTypes.arrayOf(PropTypes.any),
  fetchSubCategories: PropTypes.func
};

HomePage.defaultProps = {
  products: [],
  articles: [],
  categories: [],
  subcategories: [],
  fetchProducts: null,
  fetchArticles: null,
  fetchCategories: null,
  fetchSubCategories: null
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
