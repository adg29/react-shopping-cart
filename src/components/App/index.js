import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import BrandingCorner from '../Branding/Corner'
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
    <BrandingCorner />
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
