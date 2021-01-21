import React from 'react';

import CustomPict from '../../../../assets/Images/customer.png';





const Customer = () => {
  return (
    <section className="character customer">
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
