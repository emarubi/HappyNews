// import NPM
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'src/components/Header/Avatar';
import Button from 'src/components/Header/Button';
import Logo from 'src/components/Header/Logo';
import './style.scss';
import Title from './Title';



const Header = ({isLogged, handleLogout, first_name }) => {
    return (
      <header className='header'> 
        <Logo />
        <Title />
        <div className='header-nav'>
            <Avatar /> 
            {isLogged && (
          <>
            <div className="header-helloUser">
              <p>Bonjour {first_name} !</p>
            </div>
          <Button
            type="button"
            event={handleLogout}
          >
            Déconnexion
          </Button>
          </>
      )}
        {!isLogged && (
          <NavLink to='/connexion'> <Button>Connexion</Button></ NavLink>
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
