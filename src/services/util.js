export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const IMAGE_DIMENSION_KEYS = {
    1: 'url_570xN',
    2: 'url_170x135'
}

export const productImageByRank = (product, targetRank = 0, dimension = IMAGE_DIMENSION_KEYS[1]) => {
    let targetImage = product.images.find(i => i.rank === targetRank) || product.images[0]
    return targetImage[dimension]
}

export const productsAPI =
  'https://spray-art-nyc.firebaseio.com/products.json'
  // 'https://react-shopping-cart-67954.firebaseio.com/products.json';
// export const productsAPI = "http://localhost:8001/api/products";
