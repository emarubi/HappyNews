import React from 'react';
import logo from '../../../assets/Images/logo-happy-news-SVG.svg';
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
