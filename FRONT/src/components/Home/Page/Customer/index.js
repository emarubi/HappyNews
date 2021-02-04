import React from 'react';
import CustomPict from 'src/assets/Images/customer.png';
import './style.scss';
// import Wave2 from 'src/assets/Images/wave2.png';

const Customer = () => (

  <section className="customer">
    <div className="customer__pictureCharacter">
      <img className="customer__pictureCharacter__illustrationPicture" src={CustomPict} alt="customer" />
    </div>
    <div className="customer__presentationText">
      <h2 className="customer__presentationText__presentationTitle">Vous êtes Client</h2>
      <p className="customer__presentationText__presentationBody">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, laudantium id hic enim ut corrupti eum odio facilis dolore earum alias veniam? Nisi consectetur quos distinctio. Repellendus dolorum id quisquam!</p>
    </div>
    {/* <div className="contenWave">
      <img className="wave-2" src={Wave2} alt="wave" />
    </div> */}

  </section>
);

export default Customer;
