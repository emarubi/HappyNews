import React from 'react';
import { Link } from 'react-router-dom';
// Import du CSS
import './style.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer__list">
      <li className="footer__list__item">
        {/* <a className="footer__link__item__link" href="#">Mentions légales</a> */}
        <Link to='/mentions-légales' className="home__card__content__link">Mentions légales</ Link>
        </li>
      <li className="footer__list__item">

        {/* <a className="footer__link__item__link" href="#">A propos</a> */}
        <Link to='/a-propos-de-nous' className="home__card__content__link" > A propos </ Link>
        </li>
      <li className="footer__list__item">
        {/* <a className="footer__link__item__link" href="#">Conditions générales</a> */}
        <Link to="/condition-generales-d'utilisations" className="home__card__content__link">  Conditions générales </ Link>
        </li>
      <li className="footer__list__item">
        {/* <a className="footer__link__item__link" href="#">Contact</a> */}
        <Link to='/nous-contacter/formulaire' className="home__card__content__link" > Contact  </ Link>
        </li>
    </ul>
  </footer>
);

export default Footer;
