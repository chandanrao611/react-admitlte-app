import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes-data';
import PublicRoute from './public';
import PrivateRoute from './private';

//const basename = process.env.NODE_ENV === 'production' ? '/sst' : '/';
const basename = '/';
const Routes = () => (
  <Router basename={basename}>
    <Switch>
      {routes.map((route, i) => {
        if (route.auth) {
          return <PrivateRoute key={i} {...route} />
        } else {
          return <PublicRoute key={i} {...route} />
        }
      })}
    </Switch>
  </Router>
);
export default Routes;