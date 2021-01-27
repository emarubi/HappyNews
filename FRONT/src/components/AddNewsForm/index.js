import React, { useState } from 'react';

import './style.scss';

const AddNewsForm = () => {
  
  return (
     <section className="section-addnews-form">
      <div id="wraper">
        <div className="form-container">
          <span className="form-heading">Ajouter une News</span>
          <form method="post" 
                action="" 
                className="form-body" 
                onSubmit={() => {}}
                enctype="multipart/form-data">
            <div className="input-group">
              <i className="news-title"></i>
              <input 
                type="text"
                value=""
                placeholder="Titre..." 
                onChange={() => {}}
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-description"></i>
              <input 
                type="text"
                value=""
                placeholder="Description..." 
                onChange={() => {}}
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-category"></i>
              <input 
                type="text"
                value=""
                placeholder="Catégorie..." 
                onChange={() => {}}
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-price"></i>
              <input 
                type="number"
                value=""
                placeholder="Prix..." 
                onChange={() => {}}
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="picture-downlaod"></i>
              <input 
                type="file"
                value=""
                accept="image" 
                onChange={() => {}}
                multiple
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <button className="news-valid-form-but">
                <i className="picture-valid">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </i>
              </button>
              <button className="news-valid-form-but">
                <i className="picture-valid">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
    
}

// const mapStateToProps = state => {
//   return {
    
//   }
// }



// const mapDispatchToProps = dispatch => {
//   return {
//   }
// }

export default AddNewsForm;