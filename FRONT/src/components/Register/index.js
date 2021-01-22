import React from 'react';
// import Avatar from '../Header/Avatar';
import Button from '../Header/Button';
import './style.scss';
const FormRegister = () => {
    return (
        <form className='register'>
           {/* <Avatar /> */}
            <h1 className="register-title">Inscription</h1>
             <fieldset className="register-sec-identite">
             <legend className="register-leg-identite">Identité</legend>
            <div className="register-form">
                <label className='register-label-form' for="InputLastName">Nom</label>
                <input type="text" className="register-form-input" id="InputlastName" name="InputFirstName" placeholder="Nom" />
            </div>

            <div className="register-form">
                <label className='register-label-form' for="InputFirstName">Prénom</label>
                <input type="text" className="register-form-input" name="InputFirstName" id="InputFirstName" placeholder="Prénom" />
            </div>
            </fieldset>


            <fieldset className="register-sec-address">
            <legend className="register-leg-address">addresse</legend>
            <div className="register-form">
                <label className='register-label-form' for="InputLocation">Adresse</label>
                <input type="text" className="register-form-input" name="InputLocation" id="InputLocation" placeholder="Adresse" />
            </div>

            <div className="register-form">
                <label className='register-label-form' for="InputZipCode">Code Postal</label>
                <input type="number" className="register-form-input" name="InputZipCode" id="InputZipCode" placeholder="Code Postal" />
            </div>

            <div className="register-form">
                <label className='register-label-form' for="InputCity">Ville</label>
                <input type="text" className="register-form-input" name="InputCity" id="InputCity" placeholder="Ville" />
            </div>
            </fieldset>
                   
                
            <fieldset className="register-sec-business">
            <legend className="register-leg-business">informations professionnelles</legend>
            <div className="register-form">
                <label className='register-label-form' for="InputSociety">Socièté</label>
                <input type="text" className="register-form-input" name="InputSociety" placeholder="Socièté" />
            </div>
            <div className="register-form">
                <label className='register-label-form' for="InputEnseigne">Enseigne</label>
                <input type="text" className="register-form-input" name="InputEnseigne" id="InputEnseigne" placeholder="Enseigne" />
            </div>

            <div className="register-form">
                <label className='register-label-form' for="InputSiret">Siret</label>
                <input type="password" className="register-form-input" name="InputSiret" id="InputSiret" placeholder="Siret" />
            </div>
            </fieldset>

            <fieldset className="register-sec-security">
            <legend className="register-leg-security">securité</legend>
            <div className="register-form">
                <label className='register-label-form' for="ImputEmail">Email</label>
                <input type="email" className="register-form-input" name="ImputEmail" id="ImputEmail" placeholder="Entrer votre email" />
            </div>

            <div className="register-form">
                <label className='register-label-form' for="InputPassword">Password</label>
                <input type="password" className="register-form-input" name="InputPassword" id="InputPassword" placeholder="Mot de Passe" />
            </div>
     
            <div className="register-form">
                <label className='register-label-form' for="InputPassword">Password</label>
                <input type="password" className="register-form-input" name="InputPassword" id="InputPassword" placeholder="Confirmer le Mot de Passe" />
            </div>
            </fieldset>
            <Button>Validez la création</Button>
        </form>
      
    )
};

export default FormRegister;
