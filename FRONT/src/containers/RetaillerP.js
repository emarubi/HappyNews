import { connect } from 'react-redux';
import RetailerP from 'src/components/RetaillerP';
import { getUserDetails } from 'src/redux/actions';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserDetails: (id) => {
    dispatch(getUserDetails(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerP);
