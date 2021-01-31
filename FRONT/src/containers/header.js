import { connect } from 'react-redux';
import Header from "../components/Header";

const mapStateToProps = (state) => {
    return {
        // to get state parameters
        token: state.auth.token,
        prenom: state.auth.first_name,
        id: state.auth.userId
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
