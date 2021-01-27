import React from 'react';
// import Avatar from '../Header/Avatar';
import Button from '../Header/Button';
import Field from '../Login/Field';
import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';
import './style.scss';
const FormRegister = ({last_name,
    first_name, 
    adress, 
    zip_code, 
    city, 
    company_name, 
    shop_name, 
    registration_number, 
    ImputEmailSub, 
    InputPasswordSub, 
    changeField, 
    HandleRoleId,
    role_id,
    subscriptionSubmit}) => {


    return (
        <form className='register' onSubmit={(event) => { event.preventDefault(); subscriptionSubmit()}}>
           {/* <Avatar /> */}
            <h1 className="register-title">Inscription</h1>
             <fieldset className="register-sec-identite">
             <legend className="register-leg-identite">Identité</legend>
            <Field 
             name="last_name"
             value={last_name}
             onChange={changeField}
             placeholder="Nom"
             type= 'text'
         
             />
            <div className="register-form">
                <Field 
             name="first_name"
             value={first_name}
             onChange={changeField}
             placeholder="prenom"
             type= 'text'
           
             />
            </div>
            {/* {errors.prenom && <span> {errors.prenom.message} </span>} */}
            </fieldset>
            <fieldset className="register-sec-address">
            <legend className="register-leg-address">addresse</legend>
            <div className="register-form">
                <Field 
             name="adress"
             value={adress}
             onChange={changeField}
             placeholder="adress"
             type= 'text'
             />
     
            </div>
            
            <div className="register-form">
                <Field 
             name="zip_code"
             value={zip_code}
             onChange={changeField}
             placeholder="code postal"
             type="number"    
             />
            </div>
            <div className="register-form">
                <Field 
             name="city"
             value={city}
             onChange={changeField}
             placeholder="ville"
             type= 'text'
           
             />
            </div>
            </fieldset>
           
            <label className="form__label"htmlFor="roleID"> cliquer si vous etes commercant</label>
            <input
            onChange={(event)=> {HandleRoleId(event.target.checked)}}
            id="roleID"
            type='checkbox'
            className="form__input"
            name='role_id'
            />
      { role_id === 3 && 
<>        
            <fieldset className="register-sec-business">
            <legend className="register-leg-business">informations professionnelles</legend>
            <div className="register-form">  


            <div>
            <Field 
             name="company_name"
             value={company_name}
             onChange={changeField}
             placeholder="societe"
             type= 'text'     
             />
            </div>            
            <div className="register-form">
                <Field 
             name="shop_name"
             value={shop_name}
             onChange={changeField}
             placeholder="enseigne"
             type= 'text'       
             />
            </div>
            <div className="register-form">
                <Field 
             name="registration_number"
             value={registration_number}
             onChange={changeField}
             placeholder="siret"
             type="text"         
             />
             </div>
            </div>
            </fieldset>
   </>
}
            <fieldset className="register-sec-security">
            <legend className="register-leg-security">securité</legend>
            <div className="register-form">
                <Field 
             name="ImputEmailSub"
             value={ImputEmailSub}
             onChange={changeField}
             placeholder="email"
             type= 'email'
        
             />
            </div>
            <div className="register-form">
                <Field 
             name="InputPasswordSub"
             value={InputPasswordSub}
             onChange={changeField}
             placeholder="mot de passe"
             type= 'password'
          
             />
            </div>
     

            </fieldset>
            <Button>Validez la création</Button>
        </form>
      
    )
};

export default FormRegister;
FormRegister.propTypes = {
    last_name: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    shop_name: PropTypes.string.isRequired,
    // registration_number: PropTypes.number,
    ImputEmailSub: PropTypes.string.isRequired,
    InputPasswordSub: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
  
};
// FormRegister.defaultProps = {
//     siret: 0,
    // zip_code: null,
//   };