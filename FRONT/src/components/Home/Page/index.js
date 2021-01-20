import React from 'react';
import Map from '../../../assets/Images/map.PNG';
import Customer from '../../../assets/Images/customer.png';
import Retailer from '../../../assets/Images/retailer.png';

import './style.scss';

function Page() {
    return (
        <div className="container">
            <section className="map">
                <div className="inputSearchMap">
                        <input type="text" className="serachOnMap"/>
                    </div>
                <div className="mapSection">
                </div>
            </section>
            
            <section className="custommers">
                <img className="customerPict" src={ Customer } alt="customer"/>
                <h2 className="titleCustommers">Vous êtes Clients</h2>
                <p className="sectionLandingPageText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, laudantium id hic enim ut corrupti eum odio facilis dolore earum alias veniam? Nisi consectetur quos distinctio. Repellendus dolorum id quisquam!</p>
            </section>

            <section className="retailers">
                <h2 className="titleRetailers">Vous êtes Commerçant</h2>
                <p className="sectionLandingPageText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita officia quia alias voluptates? Corporis magni facere sint assumenda porro ipsum! Iste laborum repellat provident qui numquam possimus totam porro? Et?</p>
                <img className="retailerPict" src={ Retailer } alt="retailer"/>
            </section>
            
        </div>
    )
}

export default Page
