import React from 'react';
import EmaAvatar from 'src/assets/Images/Emanuella.svg';
import ArtAvatar from 'src/assets/Images/Arthur.svg';
import FredAvatar from 'src/assets/Images/Fredo.svg';
import YannAvatar from 'src/assets/Images/Yann.svg';
import PacAvatar from 'src/assets/Images/Paco.svg';
import './style.scss';

const About = () => (
  <section className="aboutUs">
    <div className="aboutUs__presentationSection">
      <h2 className="aboutUs__presentationSection__title">Titre de la section présentation</h2>
      <p className="aboutUs__presentationSection__text">Texte de la présentation</p>
    </div>
    <div className="aboutUs__teamSection">
      <div className="aboutUs__teamSection__character">
        <img src={ EmaAvatar } alt="emanuella avatar" className="aboutUs__teamSection__avatar"/>
        <h4 className="aboutUs__teamSection__title">Emanuella</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Emanuella</p>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={ ArtAvatar } alt="arthur avatar" className="aboutUs__teamSection__avatar"/>
        <h4 className="aboutUs__teamSection__title">Arthur</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Arthur</p>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={ FredAvatar } alt="fredo" className="aboutUs__teamSection__avatar"/>
        <h4 className="aboutUs__teamSection__title">Frédo</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Frédo</p>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={ YannAvatar } alt="yann" className="aboutUs__teamSection__avatar"/>
        <h4 className="aboutUs__teamSection__title">Yann</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Yann</p>
      </div>
      <div className="aboutUs__teamSection__character">
        <img src={ PacAvatar } alt="paco" className="aboutUs__teamSection__avatar"/>
        <h4 className="aboutUs__teamSection__title">Paco</h4>
        <p className="aboutUs__teamSection__text">Bonjour, je suis Paco</p>
      </div>
    </div>
    <div className="aboutUs__evolutionSection">
      <h2 className="aboutUs__evolutionSection__title">Titre de la section évolutions</h2>
      <div className="aboutUs__evolutionSection__text">
        <ul>
          <li>Optimiser le contact commerçant (formulaire de contact ou chat)</li>
          <li>Mise en place de la durée de vie d’une news au moment de la création</li>
          <li>Favoris pour trouver l’intérêt de créer un compte client</li>
          <li>Envoi automatique de NewsLetter</li>
          <li>Monétisation du site (La publication de news payant / La possibilité d’acheter directement en ligne)</li>
          <li>Une partie admin pour gérer les réclamations des utilisateurs</li>
          <li>Mise en place d’un système de livraison</li>
          <li>Historique des ventes et d’achats pour les utilisateurs</li>
        </ul>
      </div>
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
