import { connect } from 'react-redux';
import Header from "../components/header";

const mapStateToProps = (state) => {
    return {
        // to get state parameters
        isLogged: state.auth.logged,
        first_name: state.auth.first_name,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleLogout : () => {
            // dispatch(handleLogout( console.log('je suis dans le container de Header')));
            // 1er changement
            dispatch({ type: 'LOGOUT' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);