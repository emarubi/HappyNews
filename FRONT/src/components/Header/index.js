// import NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
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
              <NavLink to='/connexion'> <Bouton>Connection</Bouton></ NavLink>
              <NavLink to='/news/liste'><Bouton>Liste des news</Bouton></ NavLink>
        </div>
      </header>
    )
};

export default Header;
