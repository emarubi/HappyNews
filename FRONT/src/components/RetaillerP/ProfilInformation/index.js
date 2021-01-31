import React from 'react';
import Avatar from 'src/components/Header/Avatar';
import InformationForm from 'src/containers/InformationForm';
import './style.scss';

const ProfilInformation = () => {
    return (
        <div className='information-container'>
            <div className="avatar-profil">
            <Avatar/>
            </div>
            <InformationForm />
        </div>
    )
}

export default ProfilInformation;
