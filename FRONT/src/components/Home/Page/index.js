import React from 'react'
import Map from '../../../assets/Images/map.PNG'

function Page() {
    return (
        <div className="wrap">

            <section className="mapSection">
                <input type="text" className="serachOnMap"/>
                <img className="mapLandingPage" src={Map} alt="mapLandingPage"/>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#3FAFAC" fill-opacity="1" d="M0,32L60,42.7C120,53,240,75,360,106.7C480,139,600,181,720,176C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>

            <section className="custommers">
                <img src="" alt=""/>
                <h2 className="titleCustommers">Vous êtes Clients</h2>
                <p className="sectionLandingPageText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, laudantium id hic enim ut corrupti eum odio facilis dolore earum alias veniam? Nisi consectetur quos distinctio. Repellendus dolorum id quisquam!</p>
            </section>

            <section className="retailers">
                <img src="" alt=""/>
                <h2 className="titleRetailers">Vous êtes Commerçant</h2>
                <p className="sectionLandingPageText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita officia quia alias voluptates? Corporis magni facere sint assumenda porro ipsum! Iste laborum repellat provident qui numquam possimus totam porro? Et?</p>
            </section>
            
        </div>
    )
}

export default Page
