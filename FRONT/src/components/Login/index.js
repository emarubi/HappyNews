import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from 'src/assets/Images/avatar-SVG-primarycolor.svg';
import Button from '../Header/Button';
import Field from './Field';
// pour react hook form
// import { useForm } from 'react-hook-form';
// Import du CSS
import './style.scss';

const Login = ({
  email, 
  password, changeField, handleLogin}) => {
    //pour react hook form on commente handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  // const { handleSubmit, errors } = useForm();
  // const onSubmit = data => console.log(data);
  return (
    <div>
      <section className="login">
        <div className="login__loginbox">
          <img alt="avatar" src={avatar} className="login__loginbox__avatar" />
          <h1 className="login__loginbox__title">Connexion</h1>
          {/* (handlelogin pour react hook form*/}
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              value={email}
              onChange={changeField}
              placeholder="Email"
              type= "email"
          
            />
            <Field
              name="password"
              value={password}
              onChange={changeField}
              placeholder="Mot de passe"
              type= "password"
            />
            <Button type="submit">Se connecter</Button>
          </form>
          <a className="form__link" href="#">Mot de passe oublié ?</a>
          <h2 className="form__h2">Si vous n'avez pas encore de compte :</h2>
          <NavLink to="/inscription/client"><Button>Création compte Client</Button></NavLink>
          <NavLink to="/inscription/commercant"><Button>Création compte Commerçant</Button></NavLink>
        </div>
      </section>
    </div>
  );
};
Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
export default Login;
