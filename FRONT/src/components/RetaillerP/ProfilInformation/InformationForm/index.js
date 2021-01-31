import React, {useEffect} from 'react';
import './style.scss';
const InformationForm = ({loadUserDetails}) => {   
    useEffect(() => {
      loadUserDetails();
    }, []);

    return (
        <div className='user-info__container'>
            <ul className='user-info__container__list'>
                   <li className="user-info"> Nom : </li>
                   <li className="user-info"> Prenom : </li>
                   <li className="user-info"> Ville : </li>
                   <li className="user-info"> nom du magasin : </li>
                   <li className="user-info"> Contactez ce commercant par email : </li>
               </ul>            
        </div>
    )
}

export default InformationForm;
