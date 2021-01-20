// import NPM
import React from 'react';
//import Utilitaire, modules
import avatarPhoto from '../../assets/Images/avatar-header.jpg';
//import CSS
import './style.scss';
import Title from './Title';


const Header = () => {
    return (
      <header className='header'>
        <div>
          <Title />
          <p className='header-accroche'>Vos producteurs locaux ont une bonne nouvelle à vous annoncer</p> 
        </div>
     
      <div className='header-avatar-picture'>
          <img src={avatarPhoto} alt="my-avatar" className='header-avatar' />
          <button className="header-button"> Connecter-vous </button> 
      </div>
      </header>

    )
}


export default Header;
