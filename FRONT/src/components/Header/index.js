// import NPM
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'src/components/Header/Avatar'
;
import Button from 'src/components/Header/Button';
import Logo from 'src/components/Header/Logo';
import './style.scss';
import {useParams} from 'react-router-dom'
import Title from './Title';
        
const Header = ({token, handleLogout, id }) => {

 console.log(useParams)
  return (
    <header className='header'> 
      <Logo />
      <Title />
      <div className='header-nav'>
        <Avatar /> 
        {token && (
        <>
          <div className="header-helloUser">
            <p>Bonjour  !</p>
          </div>
        <Button
          type="button"
          event={handleLogout}
        >
          Déconnexion
        </Button>
        <NavLink to={`/commercant/profil/${id}`}> <Button>mon profil</Button></ NavLink>
        </>
      )}
      {token == null && (
        <>
        <NavLink to='/connexion'> <Button>Connexion</Button></ NavLink>
        </>
      )}
        <NavLink to='/news/liste'><Button>Liste des news</Button></ NavLink>
      </div>
    </header>
  )
};

Header.propTypes = {
  isLogged: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
  first_name: PropTypes.string
}

export default Header;
