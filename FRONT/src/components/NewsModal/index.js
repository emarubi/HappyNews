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
					    <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3FAFAC" fill="none" stroke-linecap="round" stroke-linejoin="round">
  							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  							<path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
							</svg><i class="fa fa-heart"></i></a>
					    <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3FAFAC" fill="none" stroke-linecap="round" stroke-linejoin="round">
  							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  							<circle cx="9" cy="19" r="2" />
  							<circle cx="17" cy="19" r="2" />
  							<path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
							</svg><i class="fa fa-shopping-cart"></i></a>
				    </div>
			    </div>
		    </div>
	    </div>
    </section>
  )
}

export default NewsModal;
