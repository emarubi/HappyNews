import React from 'react';
import PropTypes from 'prop-types';

import { Input, Form } from 'semantic-ui-react';

// Import du CSS
import './style.scss';

const SearchBar = ({ handleSubmit, searchValue, setSearchValue }) => (
  <>
    <Form
      onSubmit={() => {
        handleSubmit();
      }}
    >
      {/* Champ controlé classique, mais avec un <Input> de semantic ui */}
      <Input
        fluid
        icon="search"
        placeholder="Tapez votre recherche"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </Form>
  </>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;
