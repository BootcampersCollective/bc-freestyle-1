import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = props => (
  <div className="home-container">
    <div>HOME</div>
    <Link to="/listings">Listings</Link>
    <Link to="/listings/newlisting">New Listing</Link>
  </div>
)

export default Home;