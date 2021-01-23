import React from 'react';
import SearchBar from 'src/components/News/SearchBar';
import Button from 'src/components/Header/Button';
import NewsModal from 'src/components/NewsModal';

import { Icon } from 'semantic-ui-react';

// Import du CSS
import './style.scss';

const News = () => (
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
      <div className="newsList__item">
        <NewsModal />
      </div>
      <div className="newsList__item">
        <NewsModal />
      </div>
      <div className="newsList__item">
        <NewsModal />
      </div>
    </section>
  </div>
);

export default News;
