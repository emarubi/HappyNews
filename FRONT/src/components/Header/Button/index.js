import React from 'react';
import './style.scss';

function Bouton({children}) {
    return (
        <div>
            <button className='button'>
                {children}
            </button>   
        </div>
    )
}

export default Bouton;
