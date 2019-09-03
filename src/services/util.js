const Entities = require('html-entities').AllHtmlEntities;

export const entities = new Entities();

export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};


export const IMAGE_DIMENSIONS = {
    LARGE: 'url_570xN',
    SMALL: 'url_170x135'
}

export const productImage = ({product, rank: targetRank = 0, dimension = IMAGE_DIMENSIONS[1]}) => {
    let targetImage = product.images.find(i => i.rank === targetRank) || product.images[0]
    return targetImage[dimension]
}

export const productsAPI =
  'https://spray-art-nyc.firebaseio.com/products.json'
  // 'https://react-shopping-cart-67954.firebaseio.com/products.json';
// export const productsAPI = "http://localhost:8001/api/products";
