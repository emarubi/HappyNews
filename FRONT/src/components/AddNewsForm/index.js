import React, { useState } from 'react';

import './style.scss';

const AddNewsForm = () => {
  // local state form definition
  const initialState = {
    title: '',
    description: '',
    category: '',
    price: '',
    file:[]
  }
  // Usestate to register local state befor send it
  const [newData, setNewData] = useState(initialState);
  

  // function called when form is validate
  const handleAddNews = e => {
    // function called to block the reload of the page
    e.preventDefault();
    console.log(newData);
  }
  
  return (
     <section className="section-addnews-form">
      <div id="wraper">
        <div className="form-container">
          <span className="form-heading">Ajouter une News</span>
          <form method="post" 
            action="" 
            className="form-body" 
            onSubmit={handleAddNews}
            enctype="multipart/form-data">
            <div className="input-group">
              <i className="news-title"></i>
              <input 
                type="text"
                value={newData.title}
                placeholder="Titre..." 
                onChange={e => setNewData({...newData, title: e.target.value})}
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-description"></i>
              <input 
                type="text"
                value={newData.description}
                placeholder="Description..." 
                onChange={e => setNewData({...newData, description: e.target.value})}
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-category"></i>
              <input 
                type="text"
                value={newData.category}
                placeholder="Catégorie..." 
                onChange={e => setNewData({...newData, category: e.target.value})}
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-price"></i>
              <input 
                type="number"
                value={newData.price}
                placeholder="Prix..." 
                onChange={e => setNewData({...newData, price: e.target.value})}
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="picture-downlaod"></i>
              <input 
                type="file"
                value={newData.file}
                accept="image" 
                onChange={e => setNewData({...newData, file: [e.target.value]})}
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


export default AddNewsForm;