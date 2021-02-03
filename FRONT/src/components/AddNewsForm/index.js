import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './style.scss';

export const AddNewsForm = ({ article_title, description, picture_url,price, activity_id, userId, handleChangeField }) => {
 
  const handleChange = e => handleChangeField([e.target.name], e.target.value);

  const handleChangeImage = e => {
    const reader = new FileReader() // Je crée un nouveau reader
    const file = e.target.files[0] // Je récupère mon image 
    reader.onloadend =() =>{ // Je la converti en blob afin de pouvoir l'envoyer au back.
      // console.log('reader.result', reader.result)
      handleChangeField('picture_url', reader.result)
    }
    console.log(reader.readAsDataURL(file))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Titre :', article_title,'Description:', description,'activity_id:', activity_id,'price:', price,'picture_url:', picture_url)
  };

  return (
    <section className="section-addnews-form">
      <div id="wraper">
        <div className="form-container">
          <span className="form-heading">Ajouter une News</span>
          <form method="post" 
            className="form-body" 
            onSubmit={ handleSubmit }
            >
            <div className="input-group">
              <i className="news-title" />
              <input
                name="article_title"
                type="text"
                value={article_title}
                placeholder="Titre..." 
                onChange={e => handleChange(e)}
                required
                />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="news-description" />
              <input
                name="description"
                type="text"
                value={description}
                placeholder="Description..."
                onChange={(e) => handleChange(e)}
              />
              <span className="bar" />
            </div>
            <div className="input-group">
              <i className="news-category" />
              <select
                onChange={(e) => handleChange(e)}
                name="activity_id"
                placeholder="Catégorie..."
              >
                <option id= "1" value="boulangerie">boulangerie</option>
                <option id= "2" value="boucherie">boucherie</option>
                <option id= "5" value="charcuterie">charcuterie</option>
                <option id= "" value="coiffeur">coiffeur</option>
                <option id= "3" value="fleuriste">fleuriste</option>
                <option id= "4" value="fromagerie">fromagerie</option>
                <option id= "6" value="garagiste">garagiste</option>
                <option id= "9" value="papeterie">papeterie</option>
                <option id= "7" value="primeur">primeur</option>
              </select>
              <span className="bar" />
            </div>
            <div className="input-group">
              <i className="news-price" />
              <input
                name="price"
                type="number"
                value={price}
                placeholder="Prix..."
                onChange={(e) => handleChange(e)}
              />
              <span className="bar" />
            </div>
            <div className="input-group">
              <i className="picture-downlaod" />
              <input
                name="picture_url"
                type="file"
                value={picture_url}
                accept="image" 
                onChange={e => handleChangeImage(e)}
                //multiple
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <button className="news-valid-form-but">
                <i className="picture-valid">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </i>
              </button>
              <NavLink to={`/commercant/profil/${userId}`}>
                <button className="news-valid-form-but">
                  <i className="picture-valid">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </i>
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
};

// AddNewsForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   file: PropTypes.array.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

// export default AddNewsForm;
