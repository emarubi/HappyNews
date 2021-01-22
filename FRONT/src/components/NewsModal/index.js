import React from 'react';

import discount from '../../assets/Images/discount.png';

import './style.scss';

const NewsModal = () => {
  return (
    <section>
      <div class="product-card">
		    <div class="badge">Hot</div>
		    <div class="product-tumb">
			    <img src={ discount } alt="discount"/>
		    </div>
		  <div class="product-details">
			  <span class="product-catagory">Catégorie de News</span>
			  <h4><a href="">Ma Super Première News</a></h4>
			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			  <div class="product-bottom-details">
				  <div class="product-price"><small>$96.00</small>$230.99</div>
				    <div class="product-links">
					    <a href=""><i class="fa fa-heart"></i></a>
					    <a href=""><i class="fa fa-shopping-cart"></i></a>
				    </div>
			    </div>
		    </div>
	    </div>
    </section>
  )
}

export default NewsModal;
