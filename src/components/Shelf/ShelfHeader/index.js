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
      <div className="shelf-container-filters">
        <Sort />
      </div>
      <MultiSelect />
    </div>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
