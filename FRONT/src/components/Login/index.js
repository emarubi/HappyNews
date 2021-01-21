import React from 'react';
// Import images
import avatar from 'src/assets/Images/avatar-SVG-primarycolor.svg';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Bouton from '../Header/Button';
// import Bouton from '../Header/Button';
// Import du CSS
import './style.scss';

const Login = () => (
  <div>
    <Header />
    <section className="login">
      <div className="login__loginbox">
        <img alt="avatar" src={avatar} className="login__loginbox__avatar" />
        <h1 className="login__loginbox__title">Connexion</h1>
        <form>
          <p className="form__p">Email</p>
          <input className="form__input" type="email" name="" placeholder="Saisissez un mail" />
          <p className="form__p">Password</p>
          <input className="form__input" type="password" name="" placeholder="Saisissez un mot de passe" />
          <input className="form__input" type="submit" name="" value="Se connecter" />
          <a className="form__link" href="#">Mot de passe oublié ?</a>
          <h2 className="form__h2">Si vous n'avez pas encore de compte :</h2>
          <input className="form__input" type="button" value="Création compte Client" />
          <input className="form__input" type="button" value="Création compte Commerçant" />
          <Bouton> Se connecter </Bouton>
         {/*  import Bouton from ... */}
         {/*  import Bouton from ... */}
          {/* 
           <Bouton > creation compte client <Bouton />
          */}

          {/* 
          div
          bouton type submit

          */}
        </form>
      </div>
    </section>
    <Footer />
  </div>
);

export default Login;
