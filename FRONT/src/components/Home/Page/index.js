import React from 'react';
import Customer from './Customer/index';
import Maps from './Map/index';
import Retailer from './Retailer/index';
// == Import du CSS
import './style.scss';

function Page() {
  return (
    <div>
      <Maps />
      <Customer />
      <Retailer />
    </div>
  );
}

export default Page;
