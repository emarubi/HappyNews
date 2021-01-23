import React from 'react';
import './style.scss';

const TitleProfil = ({children}) => {
    return (
        <div>
        <h2 className='title-profil'>
            {children}
        </h2>
        </div>
    )
}

export default TitleProfil
