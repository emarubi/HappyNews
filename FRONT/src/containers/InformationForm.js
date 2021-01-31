import { connect } from 'react-redux';
import InformationForm from 'src/components/RetaillerP/ProfilInformation/InformationForm';
import {loadUserDetails} from 'src/redux/actions';

const mapStateToProps = (state) => ({

user : state.user.user
//   list: state.newsList.list,

});
const mapDispatchToProps = (dispatch) => {
    return {
        // loadUserDetails: () => {
        // // dispatch({ type: 'GET_NEWS' });
        // dispatch(loadUserDetails())
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationForm);