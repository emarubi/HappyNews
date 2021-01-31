import React, {useEffect} from 'react';
import './style.scss';
const InformationForm = ({loadUserDetails}) => {
    const Nom = JSON.parse(localStorage.getItem('last_name'))
    const prenom = JSON.parse(localStorage.getItem('first_name'))
    const ville = JSON.parse(localStorage.getItem('city'))
    const shop_name = JSON.parse(localStorage.getItem('shop_name'))
    const email = JSON.parse(localStorage.getItem('email'))
    
    useEffect(() => {
      loadUserDetails();
    }, []);

    return (
        <div className='user-info__container'>
            <ul className='user-info__container__list'>
                   <li className="user-info"> Nom : {Nom} </li>
                   <li className="user-info"> Prenom : {prenom}</li>
                   <li className="user-info"> Ville : {ville}</li>
                   <li className="user-info"> nom du magasin : {shop_name}</li>
                   <li className="user-info"> Contactez ce commercant par email : {email}</li>
               </ul>            
        </div>
    )
}

export default InformationForm;
