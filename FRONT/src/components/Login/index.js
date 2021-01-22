import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'src/assets/Images/avatar-SVG-primarycolor.svg';
import Bouton from '../Header/Button';
// Import du CSS
import './style.scss';

const Login = () => (
  <div>
    {/* <Header /> */}
    <section className="login">
      <div className="login__loginbox">
        <img alt="avatar" src={avatar} className="login__loginbox__avatar" />
        <h1 className="login__loginbox__title">Connexion</h1>
        <form>
          <label className="form__label" htmlFor="inputEmail">Email</label>
          <input id="InputEmail" className="form__input" type="email" name="email" placeholder="Saisissez un mail" />
          <label className="form__label" htmlFor="inputPassword">Password</label>
          <input id="InputPassword" className="form__input" type="password" name="password" placeholder="Saisissez un mot de passe" />
          <NavLink to='#' ><Bouton>Se connecter</Bouton></ NavLink>
          <a className="form__link" href="#">Mot de passe oublié ?</a>
          <h2 className="form__h2">Si vous n'avez pas encore de compte :</h2>
          <NavLink to='/inscription/client' ><Bouton>Création compte Client</Bouton></NavLink>
          <NavLink to='/inscription/commercant' ><Bouton>Création compte Commerçant</Bouton></NavLink>
        </form>
      </div>
    </section>
    {/* <Footer /> */}
  </div>
);

export default Login;
