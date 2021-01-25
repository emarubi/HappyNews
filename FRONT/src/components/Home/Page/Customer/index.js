import React from 'react';
import CustomPict from 'src/assets/Images/customer.png';
import Wave2 from 'src/assets/Images/wave2.png';


const Customer = () => {
  return (
    <section className="character customer">
      <div className="contain">
        <div className="pictureCharacter customer">
          <img className="illustrationPicture customer" src={ CustomPict } alt="customer"/>
        </div>
        <div className="presentationText customer">
          <h2 className="presentationTitle customer">Vous êtes Client</h2>
          <p className="presentationBody customer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, laudantium id hic enim ut corrupti eum odio facilis dolore earum alias veniam? Nisi consectetur quos distinctio. Repellendus dolorum id quisquam!</p>
        </div>
      </div>
      <div className="contenWave">
      <img className="wave-2" src={ Wave2 } alt="wave"/>
      </div>

    </section>
  )
}

export default Customer;
