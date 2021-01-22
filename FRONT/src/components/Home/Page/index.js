import React from 'react';
import Maps from './Map/index';
import Customer from './Customer/index';
import Retailer from './Retailer/index';
import CustomerProfile from './CustomerProfile/index';
import RetailerProfile from './RetailerProfile/index'

import './style.scss';

function Page() {
    return (
        <div>
            {/** 
             * <Maps />
            <Customer />
            <Retailer />
            <CustomerProfile />
            */}
            <RetailerProfile />
            
        </div>
    )
}

export default Page
