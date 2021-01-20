import React from 'react';
import logo from 'src/assets/Images/Logo-Happy-News.png';
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
