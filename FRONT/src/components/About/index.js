import React from 'react';
import EmaAvatar from 'src/assets/Images/Emanuella.svg';
import ArtAvatar from 'src/assets/Images/Arthur.svg';
import FredAvatar from 'src/assets/Images/Fredo.svg';
import YannAvatar from 'src/assets/Images/Yann.svg';
import PacAvatar from 'src/assets/Images/Paco.svg';
import './style.scss';

const About = () => (
  <section className="container">
    <div className="presentation__section">
      <h2 className="presentation__title">Titre de la section présentation</h2>
      <p className="presentation__text">Texte de la présentation</p>
    </div>
    <div className="team__section">
      <div className="team__profile__emanuella">
          <img src={ EmaAvatar } alt="emanuella avatar" className="team__avatar__emanuella"/>
          <h4 className="team__title__emanuella">Emanuella</h4>
          <p className="team__text__emanuella">Bonjour, je suis Emanuella</p>
        </div>
        <div className="team__profile__arthur">
          <img src={ ArtAvatar } alt="arthur avatar" className="team__avatar__emanuella"/>
          <h4 className="team__title__arthur">Arthur</h4>
          <p className="team__text__arthur">Bonjour, je suis Arthur</p>
        </div>
        <div className="team__profile__fredo">
          <img src={ FredAvatar } alt="fredo" className="team__avatar__emanuella"/>
          <h4 className="team__title__fredo">Frédo</h4>
          <p className="team__text__fredo">Bonjour, je suis Frédo</p>
        </div>
        <div className="team__profile__yann">
          <img src={ YannAvatar } alt="yann" className="team__avatar__emanuella"/>
          <h4 className="team__title__yann">Yann</h4>
          <p className="team__text__yann">Bonjour, je suis Yann</p>
        </div>
        <div className="team__profile__paco">
          <img src={ PacAvatar } alt="paco" className="team__avatar__emanuella"/>
          <h4 className="team__title__paco">Paco</h4>
          <p className="team__text__paco">Bonjour, je suis Paco</p>
        </div>
    </div>
    <div className="evolution__section">
      <h2 className="evolution__title">Titre de la section évolutions</h2>
      <p className="evolution__text">Texte de la section évolutions</p>
    </div>
    
  </section>

  // <div className="about">

  //   <h2 className="about_title"> QUI SOMMES-NOUS ? </h2>
  //   <p className="about_text">Quelle entreprise se trouve derrière ce nom étrange de happy News ! ? Asseyez-vous et laissez-vous conter notre histoire qui a commencé en 2021. Il est possible aussi de vous résumer Happy News en chiffres ou de vous présenter ses valeurs en lettres si vous êtes pressés. Mais avant tout, nous avons quelque chose à vous révéler : Happy News ! est une formidable aventure humaine. </p>

  //   <h2 className="about_title"> QUE FAISONS-NOUS ? </h2>
  //   <p className="about_text">Quel beau métier que celui de Happy News ! : donner à tous les moyens de mieux se nourrir et soutenir les agriculteurs et commercants qui cultivent un monde meilleur. Dans notre réseau, des femmes et des hommes passionnés, inventent de nouvelles façons de commercer. La tâche est complexe, les déclinaisons plurielles mais, de Nantes à Strasbourg les ambitions restent les mêmes. </p>

  // </div>
);

export default About;
