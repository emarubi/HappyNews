import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

const PopUp = ({ changePopup }) => (

  <div className="popup">
    <div className="popup_inner">
      <p className="popup_message">Êtes vous sûr de vouloir supprimer cette news?</p>
      <button className="popup_bouton_close" onClick={() => changePopup()}>close me </button>
      {/* <button onClick={console.log('déclenchement de handleDelete')}>delete me</button> */}
    </div>
  </div>
);

PopUp.propTypes = {
  changePopup: PropTypes.func.isRequired,
};

export default PopUp;
