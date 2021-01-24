import { connect } from 'react-redux';
import { changeAuthField } from 'src/redux/actions';
import Login from "../components/Login";

const mapStateToProps = (state) => {
    return {
        // to get state parameters
        email: state.auth.email,
        password: state.auth. password
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        // to dispatch the action which change the field values
        changeField : (value, name) => {
            dispatch(changeAuthField(value, name));
            // console.log('value', value)
            // console.log('name',name)
        },
        // handleLogin : () => {},
        // handleLogout: () => {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);