import React from 'react';
import Maps from './Map/index';
import Customer from './Customer/index';
import Retailer from './Retailer/index';

import './style.scss';

function Page() {
    return (
        <div>
            <Maps />
            <Customer />
            <Retailer />
        </div>
    )
}

export default Page
