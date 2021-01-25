import React from 'react';
import SearchBar from 'src/components/News/SearchBar';
import Button from 'src/components/Header/Button';
import NewsModal from 'src/components/NewsModal';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

// Import du CSS
import './style.scss';

const News = ({ newsList }) => (
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
      <div className="tagsContainer__tag">
        <Button>Tag 1</Button>
      </div>
      <div className="tagsContainer__tag">
        <Button>Tag 2</Button>
      </div>
      <div className="tagsContainer__tag">
        <Button>Tag 3</Button>
      </div>
    </div>
    <section className="newsList">
      {newsList.map((news) => (
        <div className="newsList__item">
          <NewsModal news={news} />
        </div>
      ))}
    </section>
  </div>
);

News.propTypes = {
  newsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      article_title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture_url: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      is_news: PropTypes.bool.isRequired,
      user_id: PropTypes.number.isRequired,
      activity_id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default News;
