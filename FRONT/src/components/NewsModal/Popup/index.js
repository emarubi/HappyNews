import PropTypes from 'prop-types';
import React from 'react';
import Button from 'src/components/Header/Button';
import './style.scss';

const PopUp = ({ changePopup, handleDelete, news }) => {
  const handleDeleteCard = (event) => {
    console.log('je suis dans ma fonctin handleDEleteCAD');
    handleDelete(event.target.value);
    changePopup();
  };

  return (

    <div className="popup">
      <div className="popup_inner">
        <p className="popup_message">Êtes vous sûr de vouloir supprimer cette news?</p>

        <Button
          type="button"
          event={() => changePopup()}
        > Fermer
        </Button>
        {console.log(news.id)}
        {console.log(news.article_title)}
        {/* <Button
          type="button"
          name={news.article_title}
          value={news.id}
          event={handleDeleteCard}
        >
          Confirmer la suppresion
        </Button> */}
        <button
          type="button"
          className="popup_bouton_delete"
          name={news.article_title}
          value={news.id}
          onClick={handleDeleteCard}
        >
          Confirmer la suppresion
        </button>
      </div>
    </div>
  );
};
PopUp.propTypes = {
  changePopup: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    article_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture_url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    activity_name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PopUp;
