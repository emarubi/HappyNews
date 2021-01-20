import React from 'react';
import Button from '../Header/Button';
import './style.scss';
const FormRegister = () => {
    return (
        <form className='register'>
             <fieldset id="sec-identite">
             <legend>Identité</legend>
            <div className="register-form">
                <label for="InputLastName">Nom</label>
                <input type="text" className="register-form-lastname" id="InputlastName" placeholder="Nom" />
            </div>

            <div className="register-form">
                <label for="InputFirstName">Prénom</label>
                <input type="text" className="register-form-firstname" id="InputFirstName" placeholder="Prénom" />
            </div>
            </fieldset>


            <fieldset id="sec-address">
            <legend>addresse</legend>
            <div className="register-form">
                <label for="InputLocation">Adresse</label>
                <input type="text" className="register-form-location" id="InputLocation" placeholder="Adresse" />
            </div>

            <div className="register-form">
                <label for="InputZipCode">Code Postal</label>
                <input type="number" className="register-form-ZipCode" id="InputZipCode" placeholder="Code Postal" />
            </div>

            <div className="register-form">
                <label for="InputCity">Ville</label>
                <input type="text" className="register-form-City" id="InputCity" placeholder="Ville" />
            </div>
            </fieldset>
                   
                
            <fieldset id="sec-business">
            <legend>informations professionnelles</legend>
            <div className="register-form">
                <label for="InputSociety">Socièté</label>
                <input type="text" className="register-form-Society" id="InputSociety" placeholder="Socièté" />
            </div>
            <div className="register-form">
                <label for="InputEnseigne">Enseigne</label>
                <input type="text" className="register-form-enseigne" id="InputEnseigne" placeholder="Enseigne" />
            </div>

            <div className="register-form">
                <label for="InputSiret">Siret</label>
                <input type="password" className="form-control" id="InputSiret" placeholder="Siret" />
            </div>
            </fieldset>

            <fieldset id="sec-security">
            <legend>securité</legend>
            <div className="register-form">
                <label for="ImputEmail">Email address</label>
                <input type="email" className="register-form-email" id="ImputEmail" placeholder="Entrer votre email" />
            </div>

            <div className="register-form">
                <label for="InputPassword1">Password</label>
                <input type="password" className="form-control" id="InputPassword1" placeholder="Mot de Passe" />
            </div>
     
            <div className="register-form">
                <label for="InputPassword">Password</label>
                <input type="password" className="form-control" id="InputPassword" placeholder="Confirmer le Mot de Passe" />
            </div>
            </fieldset>
            <Button type = "submit"> Validez la création</Button>

        </form>
      
    )
};

export default FormRegister;
