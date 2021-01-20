// import NPM
import React from 'react';
import Avatar from 'src/components/Header/Avatar';
import Bouton from 'src/components/Header/Button';
import Logo from 'src/components/Header/Logo';
import './style.scss';
import Title from './Title';
const Header = () => {
    return (
      <header className='header'>
        
        <Logo />
        <Title />

        <div className='header-nav'>
              <Avatar /> 
              <Bouton> Connection </Bouton>
              <Bouton> Liste des news </Bouton>
        </div>
      </header>
    )
}


export default Header;
