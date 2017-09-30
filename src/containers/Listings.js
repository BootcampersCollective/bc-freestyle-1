import React from 'react';
import { connect } from 'react-redux';
import Listing from '../components/Listing.js';
import listingsJSON from '../db/data.json';
import { updateListings } from '../actions/listingsActions.js';
import './Listings.css';

const Listings = ({listings, updateListings}) => {

  updateListings(listingsJSON.goods)

  return(
    <div>LISTINGS
      <div>{listings.map((el, idx) => {
        return(
          <Listing 
            key={idx}
            name={el.name}
            qty={el.qty}
          />
        )
      })}</div>
    </div>
  )
}


const mapStateToProps = store => ({
  listings: store.listings.listings
})

const mapDispatchToProps = dispatch => {
  return {
    updateListings: listings => dispatch(updateListings(listings))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);