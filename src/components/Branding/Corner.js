import React from 'react';

import './style.css';
import logoJPG from './sprayartnyc.jpg'

export default () => (
  <a
    className="branding-corner"
  >
  <img
    src={logoJPG}
    width="80"
    height="80"
    viewBox="0 0 250 250"
    style={{
      fill: '#151513',
      color: '#fff',
      position: 'absolute',
      top: '0',
      border: '0',
      left: '0'
    }}
  >
  </img>


  </a>
);
