import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// Import des composants
import Field from 'src/components/Login/Field';
import Button from 'src/components/Header/Button';
import NewsModal from 'src/components/NewsModal';
import Spinner from 'src/components/Spinner';

import { Icon } from 'semantic-ui-react';

// Import du CSS
import './style.scss';

const News = ({
  list, loadNews, hasData, activities, loadActivities, hasDataActivities,
  searchValue, changeSearchField, handleSearchSubmit,
}) => {
  // useEffect : appelle une fonction au chargement du composant
  // car 2eme parametre = []
  useEffect(() => {
  // loadNews : une prop qui charge les news (les articles)
  // cette fonction prop sera définie dans le container
    loadNews();
    // loadActivities: une prop qui charge les acitivités (les catégories de news)
    loadActivities();
  }, []);

  const { register, handleSubmit, errors } = useForm();
  return (
    <div>
      <section className="searchSection">
        <div className="searchSection__searchBar">
          <form onSubmit={handleSubmit(handleSearchSubmit)}>
            <Field
              name="search"
              value={searchValue}
              onChange={changeSearchField}
              placeholder="Saisissez le nom de votre ville"
              type="search"
              register={register({
                required: true, minLength: {value: 8, message: 'vous devez entrer au moins 10 caracteres',
                }})}
            />
            {errors.email && <span> {errors.email.message} </span>}
          </form>
        </div>
        <div className="searchSection__searchOnMap">
          <div>
            <Icon name="map marker alternate" size="big" />
          </div>
          <div className="searchSection__searchOnMap__buttonContainer">
            <Button>Afficher sur la carte</Button>
          </div>
        </div>
      </section>
      {/* On prévoit ici la future fonctionnalité de recherche par tag */}
      <div className="tagsContainer">
        {activities.map((tag) => (
          <div key={tag.id} className="tagsContainer__tag">
            {hasDataActivities && <Button>{tag.activity_name}</Button>}
          </div>
        ))}
      </div>
      <section className="newsList">
        {!hasData && <Spinner />}
        {list.map((news) => (
          <div key={news.id} className="newsList__item">
            {hasData && <NewsModal news={news} />}
            {/* Affichage conditionnel : si pas de donnée, pas de News */}
          </div>
        ))}
      </section>
    </div>
  );
};

News.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  changeSearchField: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  loadNews: PropTypes.func.isRequired,
  loadActivities: PropTypes.func.isRequired,
  hasData: PropTypes.bool.isRequired,
  hasDataActivities: PropTypes.bool.isRequired,
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      activity_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      article_title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture_url: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      is_news: PropTypes.bool.isRequired,
      user_id: PropTypes.number.isRequired,
      activity_id: PropTypes.number.isRequired,
      activity_name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

News.defaultProps = {
  searchValue: '',
};

export default News;
