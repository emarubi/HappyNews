import { connect } from 'react-redux';
// import action
import {
  getAllUsers, getAllUsersSuccess,
} from 'src/redux/actions';
// composant de présentation
import Maps from '../components/Home/Page/Map';

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => {
    dispatch(getAllUsers());
  },
  getAllUsersSuccess: (users) => {
    dispatch(getAllUsersSuccess(users));
  },
});

const mapStateToProps = (state) => ({
  cityCoordinates: state.searchValue.cityCoordinates,
  users: state.user.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
