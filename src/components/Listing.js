import React from 'react';
import './Listing.css';

const Listing = ({name, qty}) => (
  <div className="listing-container">
    <div>{name}</div>
    <div>{qty}</div>
  </div>
)

export default Listing;