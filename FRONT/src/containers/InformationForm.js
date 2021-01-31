import { connect } from 'react-redux';
import InformationForm from 'src/components/RetaillerP/ProfilInformation/InformationForm';
import {getUserDetails} from 'src/redux/actions';
const mapStateToProps = (state) => ({


//   list: state.newsList.list,

});
const mapDispatchToProps = (dispatch) => {
    return {
        loadUserDetails: () => {
        // dispatch({ type: 'GET_NEWS' });
        dispatch(getUserDetails(console.log('container')))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationForm);