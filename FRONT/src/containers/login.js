import { connect } from 'react-redux';
import { changeAuthField, handleLogin } from 'src/redux/actions';
import Login from "../components/Login";

const mapStateToProps = (state) => {
    return {
        // to get state parameters
        email: state.auth.email,
        password: state.auth. password,
        isLogged: state.auth.logged,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeField : (value, name) => {
            dispatch(changeAuthField(value, name));
        },
        handleLogin : () => {
            dispatch(handleLogin( console.log('je suis dans le container')));
        }
        // handleLogout: () => {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);