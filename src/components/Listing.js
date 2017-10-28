import React from 'react';
import './Listing.css';

const Listing = (props) => (
  <div className="listing-container">
  	<header>
    	<h3>{props.name}</h3>
    	<h5>Posted: {props.postDate}</h5>
    </header>
    <section>
    	<img alt="item preview" className="summaryImg" src={props.img}/>
   		<p>{props.desc}</p>
	</section>
	<footer>
		<p>Qty: {props.qty}</p>
		<a href={props.detailRoute}>More Info</a>
	</footer>
  </div>
)

export default Listing;