import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes/';

const Routes = () => (
  <Switch>
    {routes.map(route => (
      route.exact ? <Route exact path={route.path} component={route.component} />
              : <Route path={route.path} component={route.component} />
    ))}
  </Switch>
)

export default Routes;