import { connect } from 'react-redux';
import RetailerP from 'src/components/RetaillerP';
import { getUserDetails } from 'src/redux/actions';

const mapStateToProps = (state) => ({
  user: state.user,
  list: state.newsList.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserDetails: (id) => {
    dispatch(getUserDetails(id));
  },
  loadNews: () => {
    dispatch({ type: 'GET_NEWS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerP);
