import { connect } from 'react-redux';
import RetaillerP from 'src/components/RetaillerP';

const mapStateToProps = (state) => {
    return {
        prenom: state.auth.first_name
    }
}

export default connect(mapStateToProps)(RetaillerP);