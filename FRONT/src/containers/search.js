import { connect } from 'react-redux';

import Search from 'src/components/News/SearchBar';

import { setSearchValue, submitSearch } from 'src/redux/actions';

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchValue: (value) => {
    dispatch(setSearchValue(value));
  },
  handleSubmit: () => {
    dispatch(submitSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
