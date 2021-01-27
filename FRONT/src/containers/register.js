import FormRegister from 'src/components/Register';
import { connect } from 'react-redux'
import { changeAuthField } from 'src/redux/actions';

const mapStateToProps = (state) => ({
    last_name: state.auth.last_name,
    first_name : state.auth.first_name,
    adress: state.auth.adress,
    zip_code: state.auth.zip_code,
    city: state.auth.city,
    company_name: state.auth.company_name,
    shop_name: state.auth.shop_name,
    registration_number: state.auth.registration_number,
    ImputEmailSub: state.auth.ImputEmailSub,
    InputPasswordSub: state.auth.InputPasswordSub,
    // InputPasswordverified: state.auth.InputPasswordverified,
    role_id: state.auth.role_id
})

const mapDispatchToProps = (dispatch) => {
    return {
        changeField : (value, name) => {
            dispatch(changeAuthField(value, name));
        },
        subscriptionSubmit : () => {
            dispatch(subscriptionSubmitForm(console.log('je suis dans le container de subscribe from')));
        },
        HandleRoleId: (checked) => {
            console.log('je suis dans le register container, valeur de checked', checked)
            // dispatch(HandleRoleIdChecked(checked));
            dispatch ({ type: 'SUBSCRIBE_ROLE_ID', checked  })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);