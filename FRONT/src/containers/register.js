import FormRegister from 'src/components/Register';
import { connect } from 'react-redux'
import { changeAuthField } from 'src/redux/actions';

const mapStateToProps = (state) => ({
    name: state.auth.name,
    prenom : state.auth.prenom,
    address: state.auth.address,
    zip_code: state.auth.zip_code,
    societe: state.auth.societe,
    enseigne: state.auth.enseigne,
    siret: state.auth.siret,
    ville: state.auth.ville,
    ImputEmailSub: state.auth.ImputEmailSub,
    InputPasswordSub: state.auth.InputPasswordSub,
    InputPasswordverified: state.auth.InputPasswordverified
})

const mapDispatchToProps = (dispatch) => {
    return {
        changeField : (value, name) => {
            dispatch(changeAuthField(value, name));
        },
        subscriptionSubmit : () => {
            dispatch(subscriptionSubmitForm(console.log('je suis dans le container de subscribe from')));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);