import React, { useEffect } from 'react';
import SearchBar from 'src/components/News/SearchBar';
import Button from 'src/components/Header/Button';
import NewsModal from 'src/components/NewsModal';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

// Import du CSS
import './style.scss';

const News = ({
  list, loadNews, hasData, activities, loadActivities, hasDataActivities,
}) => {
  // useEffect : appelle une fonction au chargement du composant
  // car 2eme parametre = []
  useEffect(() => {
  // loadRecipes : une prop qui charge les news (les articles)
  // cette fonction prop sera définie dans le container
    loadNews();
    // loadActivities: une prop qui charge les acitivités (les catégories de news)
    loadActivities();
  }, []);

  return (
    <div>
      <section className="searchSection">
        <div className="searchSection__searchBar">
          <SearchBar />
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
    }),
  ).isRequired,
};

export default News;
