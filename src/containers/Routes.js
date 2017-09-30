import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import TodoList from './TodoList';
import About from './About';
import NotFound from './NotFound';
import Listings from './Listings';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/listings" component={Listings} />
    <Route exact path="/todolist" component={TodoList} />
    <Route exact path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default Routes;