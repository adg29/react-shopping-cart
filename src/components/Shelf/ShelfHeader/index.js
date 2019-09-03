import React from 'react';
import PropTypes from 'prop-types';

import MultiSelect from '../MultiSelect'
import Sort from '../Sort';

const ShelfHeader = props => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} Product(s) found.</span>
      </small>
      <MultiSelect products={products} />
      <Sort />
    </div>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired
};

export default ShelfHeader;
