import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { loadNews } from 'src/redux/actions';
import { NavLink } from 'react-router-dom';
import PopUp from 'src/containers/popup';
import './style.scss';

const NewsModal = ({
  news,
}) => {
  const [popUp, setPopUp] = useState(false);
  const changePopup = () => {
    setPopUp(!popUp);
  };

  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    // loadNews : une prop qui charge les news (les articles)
    // cette fonction prop sera définie dans le container
    loadNews();
    console.log('je suis dans le useEffect de NewsModal');
  }, [popUp]);

  return (
    <>
      <section>
        <div className="product-card">
          <div className="badge">
            {
              news.is_news === true ? 'News' : 'Article en vitrine'
            }
          </div>

          <div className="product-tumb">
            <img src={news.picture_url} alt="news" onClick={() => manageState(!modalState)} />
          </div>
          <div className="product-details">
            <span className="product-catagory">{news.activity_name}</span>
            <h4><a href="">{news.article_title}</a></h4>
            <p>{news.description}</p>
            <div className="product-bottom-details">
              <div className="product-price"><small>$96.00</small>${news.price}</div>
              <div className="product-links">
                <NavLink to={`/commercant/profil/${news.user_id}`}>Voir le profil de ce commercant</NavLink>
                { parseInt(localStorage.getItem('id'), 10) === news.user_id
                  && (
                    <>
                      <MdDeleteForever onClick={() => {
                        changePopup(); console.log(popUp);
                      }}
                      />
                      {popUp === true
                      && <PopUp news={news} changePopup={changePopup} />}
                    </>

                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`modalBackground modalShowing-${modalState} product-modal`}>
          <div className="container-modal">
            <div className="badge-modal">
              {
                news.is_news === true ? 'News' : 'Article en vitrine'
              }
            </div>
            <div className="product-tumb-modal">
              <img src={news.picture_url} alt="news-modal" className="modal-picture" />
            </div>
            <div className="product-details-modal">
              <span className="product-catagory-modal">{news.activity_name}</span>
              <h4><a href="">{news.article_title}</a></h4>
              <p>{news.description}</p>
              <div className="product-bottom-details-modal">
                <div className="product-price-modal"><small>$96.00</small>${news.price}</div>
                <div className="product-links-modal">
                  <button type="button" onClick={() => manageState(!modalState)}>
                    fermer la modale
                  </button>
                  <NavLink to={`/commercant/profil/${news.user_id}`}>Voir le profil de ce commercant</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

NewsModal.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    article_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture_url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    activity_name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    is_news: PropTypes.bool.isRequired,
  }).isRequired,
};

export default NewsModal;
