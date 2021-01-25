import React from 'react';
import './style.scss';

const Button = ({children}) => {
  return (
    <div>
      <button type="submit" className='button'>
        {children}
      </button>
    </div>
  )
};

export default Button;
