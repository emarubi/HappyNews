import React from 'react';
import EmaAvatar from 'src/assets/Images/Emanuella.svg';
import ArtAvatar from 'src/assets/Images/Arthur.svg';
import FredAvatar from 'src/assets/Images/Fredo.svg';
import YannAvatar from 'src/assets/Images/Yann.svg';
import PacAvatar from 'src/assets/Images/Paco.svg';
import './style.scss';

const About = () => (
  <section className="container">
    <div className="presentation">
      <div className="presentation__profile__emanuella">
        <img src={ EmaAvatar } alt="" className="presentation__avatar__emanuella"/>
        <h4 className="presentation__title__emanuella">Emanuella</h4>
      </div>
      <div className="presentation__profile__arthur">
        <img src={ ArtAvatar } alt="" className="presentation__avatar__emanuella"/>
        <h4 className="presentation__title__arthur">Arthur</h4>
      </div>
      <div className="presentation__profile__fredo">
        <img src={ FredAvatar } alt="" className="presentation__avatar__emanuella"/>
        <h4 className="presentation__title__fredo">Frédo</h4>
      </div>
      <div className="presentation__profile__yann">
        <img src={ YannAvatar } alt="" className="presentation__avatar__emanuella"/>
        <h4 className="presentation__title__yann">Yann</h4>
      </div>
      <div className="presentation__profile__paco">
        <img src={ PacAvatar } alt="" className="presentation__avatar__emanuella"/>
        <h4 className="presentation__title__paco">Paco</h4>
      </div>
    </div>
    <div className="team">
      L'équipe
    </div>
    <div className="evolution">
      Evolutions possibles
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
