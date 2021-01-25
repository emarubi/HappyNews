import { connect } from 'react-redux';
import App from "../components/App";

const mapStateToProps = (state) => {
    return {
        // to get state parameters
        isLogged: state.auth.logged,
    }
}

export default connect(mapStateToProps)(App);