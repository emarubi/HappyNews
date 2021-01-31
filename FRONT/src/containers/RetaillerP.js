import {connect} from 'react-redux';
import RetailerP from 'src/components/RetaillerP';
import { getUserDetails  } from 'src/redux/actions';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadUserDetails : (id) => {
            console.log(id)
            dispatch(getUserDetails(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RetailerP);
