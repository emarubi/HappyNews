import React from 'react';
import logo from '../../../assets/Images/Logo-happy-News.png';
import './style.scss';
function Logo() {
    return (
        <div className='logo'>
            <a href='#' >
                <img src={logo} alt="logo website" className='logo-img' />
            </a> 
        </div>
    )
}

export default Logo;
