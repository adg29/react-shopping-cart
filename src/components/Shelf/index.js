import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { multiSelectProducts, fetchProducts } from '../../services/shelf/actions';

import Spinner from '../Spinner';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

import './style.scss';

class Shelf extends Component {
  static propTypes = {
    multiSelectProducts: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    filters: PropTypes.array,
    sort: PropTypes.string,
    multiselect: PropTypes.array
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { multiselect: nextMultiSelect, filters: nextFilters, sort: nextSort } = nextProps;

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, nextSort);
    }

    console.log('derived state multiselect')
    if (nextMultiSelect !== this.props.multiselect) {
      console.log('nextMultiSelect')
      console.log(nextMultiSelect)
    }
  }

  handleFetchProducts = (
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ isLoading: true });
    this.props.fetchProducts(filters, sort, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <ShelfHeader products={products} productsLength={products.length} />
          <ProductList products={products} />
        </div>
      </React.Fragment>
    );
  }
}

const getMultiSelectProducts = (products, multiselect) => {
  if (multiselect && multiselect.length > 0) {
    let multiselectTags = multiselect.map(t => t.value)
    let filtered = [...products].filter(p => {
      return p.tags.find(tag => multiselectTags.includes(tag))
    })

    return filtered
  } else {
    return products
  }
}

const mapStateToProps = state => {
  return {
    products: getMultiSelectProducts(state.shelf.products, state.multiselect.tags),
    filters: state.filters.items,
    sort: state.sort.type,
    multiselect: state.multiselect.tags
  }
}

export default connect(
  mapStateToProps,
  { fetchProducts, multiSelectProducts }
)(Shelf);
