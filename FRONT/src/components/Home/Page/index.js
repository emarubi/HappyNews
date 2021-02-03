import React from 'react';
import Customer from './Customer/index';
import Maps from '../../../containers/map';
import Retailer from './Retailer/index';
// == Import du CSS
import './style.scss';

function Page() {
  return (
    <div>
      <span className="map__information">Cliquez sur cette carte et découvrez ce qui se cache près de chez vous ...</span>
      <Maps />
      <Customer />
      <Retailer />
    </div>
  );
}

export default Page;
