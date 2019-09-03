import { FILTER_PRODUCTS, FETCH_PRODUCTS } from './actionTypes';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
