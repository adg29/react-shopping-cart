import { FILTER_PRODUCTS, FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const multiSelectProducts = (multiselect, products, callback) => dispatch => {
  let products = [...products].filter(p => 
      multiselect.find(filtertag => p.tags.find(tag => tag === filtertag))
  )
  console.log('shelf multiselectproducts action')

  if (!!callback) {
    callback();
  }

  return dispatch({
    type: FILTER_PRODUCTS,
    payload: products
  })
}

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data;

      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
