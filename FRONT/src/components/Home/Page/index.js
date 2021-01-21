import React from 'react';
import Map from '../../../assets/Images/map.PNG';
import Customer from '../../../assets/Images/customer.png';
import Retailer from '../../../assets/Images/retailer.png';

import './style.scss';

function Page() {
    return (
        <body>
            <section className="mapSection">
                <div className="wrap">
                    <div className="content">

                    </div>
                    <div class="custom-shape-divider-bottom-1611212523">
                        <svg className="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            </section>
            
        </body>
        
          
    )
}

export default Page

{/*
    -------------------- Clip Path Circle
    <body>
            <section>
                <div className="content">
                     <h2>Composant non rectangulaire</h2>
                </div>
            </section> 
        </body> */}

{/**
    ---------------------- Paco /Home component
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
            </section> */}