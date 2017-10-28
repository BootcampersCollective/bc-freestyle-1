import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Listings from './Listings';
import ListingDetail from '../components/ListingDetail';
import NewListing from './NewListing';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/listings" component={Listings} />
    <Route exact path="/listings/newlisting" component={NewListing} />  
    <Route exact path="/listings/:id" component={ListingDetail} />  
    <Route exact path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default Routes;