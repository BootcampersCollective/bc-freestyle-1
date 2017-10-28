import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => (
    <div className="navbar">
        <div className="navbar-item">
            <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
            <Link to="/listings">Listings</Link>
        </div>
        <div className="navbar-item">
            <Link to="/listings/newlisting">New Listing</Link>
        </div>
        <div className="login">
        </div>
    </div>
)

export default NavBar;