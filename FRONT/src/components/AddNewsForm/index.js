import React from 'react';

import './style.scss';

const AddNewsForm = () => {
  return (
    <section className="section-addnews-form">
      <div id="wraper">
        <div className="form-container">
          <span className="form-heading">Ajouter une News</span>
          <form action="" className="form-body">
            <div className="input-group">
              <i className="news-title"></i>
              <input type="text"placeholder="Titre..." required/>
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-description"></i>
              <input type="text"placeholder="Description..." required/>
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-category"></i>
              <input type="text"placeholder="Catégorie..." required/>
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-price"></i>
              <input type="number"placeholder="Prix..." required/>
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="picture-downlaod"></i>
              <input type="file" accept="image" required/>
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <button className="news-valid-form-but">
                <i className="picture-valid"></i>
              </button>
              <div className="switch-login">
                <a href="#">Déjà un compte? <span>Login</span></a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddNewsForm;