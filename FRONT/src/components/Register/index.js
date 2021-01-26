import React from 'react';
// import Avatar from '../Header/Avatar';
import Button from '../Header/Button';
import Field from '../Login/Field';
// import PropTypes from 'prop-types';
import './style.scss';
const FormRegister = ({name, prenom, address, zip_code, ville, societe, enseigne, siret, ImputEmailSub, InputPasswordSub, InputPasswordverified, changeField}) => {
    //  const changeField = (event) => {   
    //      changeFieldRegister(event.target.value, name);
    //    };
    return (
        <form className='register'>
           {/* <Avatar /> */}
            <h1 className="register-title">Inscription</h1>
             <fieldset className="register-sec-identite">
             <legend className="register-leg-identite">Identité</legend>
            {/* <div className="register-form">
                <label className='register-label-form' for="InputLastName">Nom</label>
                <input type="text" className="register-form-input" id="InputlastName" name="InputFirstName" placeholder="Nom" />
            </div> */}
            <Field 
             name="name"
             value={name}
             onChange={changeField}
             placeholder="Nom"
             />
            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputFirstName">Prénom</label> */}
                {/* <input
                // value={name} onChange= {event =>  
                //     changeFieldRegister(event.target.value, name)
                // }
                type="text" className="register-form-input" name="InputFirstName" id="InputFirstName" placeholder="Prénom" /> */}
                <Field 
             name="prenom"
             value={prenom}
             onChange={changeField}
             placeholder="prenom"
             />
            </div>
            </fieldset>


            <fieldset className="register-sec-address">
            <legend className="register-leg-address">addresse</legend>
            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputLocation">Adresse</label> */}
                {/* <input type="text" className="register-form-input" name="InputLocation" id="InputLocation" placeholder="Adresse" /> */}
                <Field 
             name="address"
             value={address}
             onChange={changeField}
             placeholder="address"
             />
            </div>

            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputZipCode">Code Postal</label> */}
                {/* <input type="number" className="register-form-input" name="InputZipCode" id="InputZipCode" placeholder="Code Postal" /> */}
                <Field 
             name="zip_code"
             value={zip_code}
             onChange={changeField}
             placeholder="zip_code"
             />
            </div>

            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputCity">Ville</label> */}
                {/* <input type="text" className="register-form-input" name="InputCity" id="InputCity" placeholder="Ville" /> */}
                <Field 
             name="ville"
             value={ville}
             onChange={changeField}
             placeholder="ville"
             />
            </div>
            </fieldset>
                   
                
            <fieldset className="register-sec-business">
            <legend className="register-leg-business">informations professionnelles</legend>
            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputSociety">Socièté</label> */}
                {/* <input type="text" className="register-form-input" name="InputSociety" placeholder="Socièté" /> */}
                <Field 
             name="societe"
             value={societe}
             onChange={changeField}
             placeholder="societe"
             />
            </div>
            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputEnseigne">Enseigne</label> */}
                {/* <input type="text" className="register-form-input" name="InputEnseigne" id="InputEnseigne" placeholder="Enseigne" /> */}
                <Field 
             name="enseigne"
             value={enseigne}
             onChange={changeField}
             placeholder="enseigne"
             />
            </div>

            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputSiret">Siret</label> */}
                {/* <input type="password" className="register-form-input" name="InputSiret" id="InputSiret" placeholder="Siret" /> */}
                <Field 
             name="siret"
             value={siret}
             onChange={changeField}
             placeholder="siret"
             />
            </div>
            </fieldset>

            <fieldset className="register-sec-security">
            <legend className="register-leg-security">securité</legend>
            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="ImputEmailSub">Email</label>
                <input type="email" className="register-form-input" name="ImputEmailSub" id="ImputEmailSub" placeholder="Entrer votre email" /> */}
                <Field 
             name="ImputEmailSub"
             value={ImputEmailSub}
             onChange={changeField}
             placeholder="email"
             />
            </div>

            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputPasswordSub">Password</label> */}
                {/* <input type="password" className="register-form-input" name="InputPasswordSub" id="InputPasswordSub" placeholder="Mot de Passe" /> */}
                <Field 
             name="InputPasswordSub"
             value={InputPasswordSub}
             onChange={changeField}
             placeholder="mot de passe"
             />
            </div>
     
            <div className="register-form">
                {/* <label className='register-label-form' htmlFor="InputPasswordverified">Password</label>
                <input type="password" className="register-form-input" name="InputPasswordverified" id="InputPasswordverified" placeholder="Confirmer le Mot de Passe" /> */}
                <Field 
             name="InputPasswordverified"
             value={InputPasswordverified}
             onChange={changeField}
             placeholder="confirmer votre mot de passe "
             />
            </div>
            </fieldset>
            <Button>Validez la création</Button>
        </form>
      
    )
};

export default FormRegister;
// FormRegister.propTypes = {
//     name: PropTypes.string.isRequired,
//     changeField: PropTypes.func.isRequired,
  
// };