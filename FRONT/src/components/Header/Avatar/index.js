import React from 'react';
import avatarPhoto from '../../../assets/Images/avatar-SVG-primarycolor.svg';
import './style.scss';

function Avatar() {
    return (
        <div className='avatar'>
              <img src={avatarPhoto} alt="my-avatar" className='avatar-img' />
        </div>
    )
}

export default Avatar;
