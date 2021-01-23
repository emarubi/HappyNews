import React from 'react';
import SearchBar from 'src/components/News/SearchBar';
// Import du CSS
import './style.scss';

const News = () => (
  <div>
    <section>
      <div className="searchBar">
        <SearchBar />
      </div>
    </section>
  </div>
);

export default News;
