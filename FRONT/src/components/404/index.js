import React from 'react';
import errorPicture from '../../assets/Images/404.png';
import './style.scss';
const NotFound = () => {
    return (
        <div className='error'>
            <img src={errorPicture}  alt='erreur 404' className='error_picture'/>
        </div>
    )
}

export default NotFound;
