import { connect } from 'react-redux';
import Login from "../components/Login";


const mapStateToProps = (state) => {
    return {
        // on recupere l'email et le password du auth reducer
        email: state.auth.email,
        password: state.auth. password
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeField : (value, name) => {
            console.log('value', value)
            console.log('name',name)
        },
        // handleLogin : () => {},
        // handleLogout: () => {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);