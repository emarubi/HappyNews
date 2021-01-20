// import NPM
import React from 'react';
//import Utilitaire, modules
import avatarPhoto from '../../assets/Images/avatar-header.jpg';
import logo from '../../assets/Images/logo-happy-news-web.png';
//import CSS
import './style.scss';
import Title from './Title';


const Header = () => {
    return (
      <header className='header'>
        <a href='#' >
          <img src={logo} alt="logo website" className='header-logo' />
        </a> 
          <Title />
          <div className='header-avatar-picture'>
          <img src={avatarPhoto} alt="my-avatar" className='header-avatar' />
          <button className="header-button"> se connecter </button> 
          <button className="header-button-news"> liste des news </button> 
      </div>
      </header>

    )
}


export default Header;
