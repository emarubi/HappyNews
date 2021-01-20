import React from 'react';
import avatarPhoto from '../../../assets/Images/avatar-header.jpg';
import './style.scss';

function Avatar() {
    return (
        <div className='avatar'>
              <img src={avatarPhoto} alt="my-avatar" className='avatar-img' />
        </div>
    )
}

export default Avatar;
