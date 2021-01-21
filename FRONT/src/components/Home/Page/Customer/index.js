import React from 'react';

import CustomPict from '../../../../assets/Images/customer.png';

import './style.scss';

const Customer = () => {
  return (
    <section className="character customer">
      <div class="custom-shape-divider-bottom-1611212523">
        <svg className="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="pictureCharacter customer">
        <img className="illustrationPicture customer" src={ CustomPict } alt="customer"/>
      </div>
      <div className="presentationText customer">
        <h2 className="presentationTitle customer">Vous êtes Client</h2>
          <p className="presentationBody customer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, laudantium id hic enim ut corrupti eum odio facilis dolore earum alias veniam? Nisi consectetur quos distinctio. Repellendus dolorum id quisquam!</p>
      </div>
    </section>
  )
}

export default Customer;
