import React from 'react';
import { NavLink } from 'react-router-dom';
// Import du CSS
import './style.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer__list">
      <li className="footer__list__item">
        {/* <a className="footer__link__item__link" href="#">Mentions légales</a> */}
        <NavLink to='/mentions-légales' className="home__card__content__link">Mentions légales</ NavLink>
        </li>
      <li className="footer__list__item">

        {/* <a className="footer__link__item__link" href="#">A propos</a> */}
        <NavLink to='/a-propos-de-nous' className="home__card__content__link" > A propos </ NavLink>
        </li>
      <li className="footer__list__item">
        {/* <a className="footer__link__item__link" href="#">Conditions générales</a> */}
        <NavLink to="/condition-generales-d'utilisations" className="home__card__content__link">  Conditions générales </ NavLink>
        </li>
      <li className="footer__list__item">
        {/* <a className="footer__link__item__link" href="#">Contact</a> */}
        <NavLink to='/nous-contacter/formulaire' className="home__card__content__link" > Contact  </ NavLink>
        </li>
    </ul>
  </footer>
);

export default Footer;
