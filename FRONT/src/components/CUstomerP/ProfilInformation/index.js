import React from 'react';
import Avatar from 'src/components/Header/Avatar';
import InformationForm from './informationForm';
import './style.scss';

const ProfilInformation = () => {
    return (
        <div className='information-container'>
            <Avatar/>
            <InformationForm />
        </div>
    )
}

export default ProfilInformation;
