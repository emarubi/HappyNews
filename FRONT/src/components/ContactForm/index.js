import React from 'react';
import './style.scss';
const ContactForm = () => {
    return (
        <form className='contact'>
            <h1 className="contact-title">Contactez-nous</h1>
             
            
            <div className="contact-form">
                <label className='contact-label-form' for="InputLastName">Nom</label>
                <input type="text" className="contact-form-input" id="InputlastName" name="InputFirstName" placeholder="Nom" />
            </div>

            <div className="register-form">
                <label className='contact-label-form' for="InputFirstName">Prénom</label>
                <input type="text" className="contact-form-input" name="InputFirstName" id="InputFirstName" placeholder="Prénom" />
            </div>
            <div className="contact-form">
                <label className='contact-label-form' for="ImputEmail">Email</label>
                <input type="email" className="contact-form-input" name="ImputEmail" id="ImputEmail" placeholder="Entrer votre email" />
            </div>
            <div className="contact-form">
                <label className='contact-label-form' for="ImputText">Votre message</label>
                <textarea type="text-area" className="contact-form-input" name="ImputEmail" id="ImputEmail" placeholder="Entrer votre message" ></textarea>
            </div>
        </form>
    )
}

export default ContactForm;
