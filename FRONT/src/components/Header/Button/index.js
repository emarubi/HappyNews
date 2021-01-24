import React from 'react';
import './style.scss';

const Bouton = ({children, type}) => {
  return (
    <div>
      <button type={type} className='button'>
        {children}
      </button>
    </div>
  )
};

export default Bouton;
