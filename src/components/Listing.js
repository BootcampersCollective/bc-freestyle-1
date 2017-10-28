import React from 'react';
import './Listing.css';

const Listing = ({name, qty, desc, postDate, img, detailRoute}) => (
  <div className="listing-container">
  	<header>
    	<h3>{name}</h3>
    	<h5>Posted: {postDate}</h5>
    </header>
    <section>
    	<img alt="item preview" className="summaryImg" src={img}/>
   		<p>{desc}</p>
	</section>
	<footer>
		<p>Qty: {qty}</p>
		<a href={detailRoute}>More Info</a>
	</footer>
  </div>
)

export default Listing;