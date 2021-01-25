import React from 'react';
import PropTypes from 'prop-types';

import discount from '../../assets/Images/discount.png';

import './style.scss';

const NewsModal = ({ news }) => {
  return (
    <section>
      <div className="product-card">
		    <div className="badge">Hot</div>
		    <div className="product-tumb">
			    <img src={news.picture_url} alt="news-image"/>
		    </div>
		  <div className="product-details">
			  <span className="product-catagory">Catégorie de News</span>
			  <h4><a href="">{news.article_title}</a></h4>
			  <p>{news.description}</p>
			  <div className="product-bottom-details">
				  <div className="product-price"><small>$96.00</small>${news.price}</div>
				    <div className="product-links">
					    <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3FAFAC" fill="none" stroke-linecap="round" stroke-linejoin="round">
  							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  							<path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
							</svg><i className="fa fa-heart"></i></a>
					    <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3FAFAC" fill="none" stroke-linecap="round" stroke-linejoin="round">
  							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  							<circle cx="9" cy="19" r="2" />
  							<circle cx="17" cy="19" r="2" />
  							<path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
							</svg><i className="fa fa-shopping-cart"></i></a>
				    </div>
			    </div>
		    </div>
	    </div>
    </section>
  )
}

NewsModal.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      article_title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture_url: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      is_news: PropTypes.bool.isRequired,
      user_id: PropTypes.number.isRequired,
      activity_id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default NewsModal;
