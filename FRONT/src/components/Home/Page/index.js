import React from 'react';
import Map from '../../../assets/Images/map.PNG';
import Customer from '../../../assets/Images/customer.png';
import Retailer from '../../../assets/Images/retailer.png';

import './style.scss';

function Page() {
    return (
        <div className="container">
            <section className="mapSection">
                <div className="contentInput">
                    <input type="text" className="searchOnMap"/>
                    <label className="textLabel">Rechercher</label>
                </div>
                <img className="mapPict" src={ Map } alt="map"/>
            </section>
            
            <section className="customers">
                <img className="customerPict" src={ Customer } alt="customer"/>
                <div className="customerText">
                    <h2 className="titleCustomers">Vous êtes Client</h2>
                    <p className="sectionLandingPageText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, laudantium id hic enim ut corrupti eum odio facilis dolore earum alias veniam? Nisi consectetur quos distinctio. Repellendus dolorum id quisquam!</p>
                </div>
            </section>

            <section className="retailers">
                <div className="retailerText">
                    <h2 className="titleRetailers">Vous êtes Commerçant</h2>
                    <p className="sectionLandingPageText">Lorem ipsum, dolor    sit amet consectetur adipisicing elit. Expedita officia    quia alias voluptates? Corporis magni facere sint  assumenda porro ipsum! Iste laborum repellat provident   qui numquam possimus totam porro? Et?</p>
                </div>
                <img className="retailerPict" src={ Retailer } alt="retailer"/>
            </section>
            
        </div>
    )
}

export default Page
