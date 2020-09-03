import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Skills from '../pages/Skills';
import Location from '../pages/Location';
import Favorites from '../pages/Favorites';
import Contacts from '../pages/Contacts';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Profile} />
    <Route path="/location" component={Location} />
    <Route path="/skills" component={Skills} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);

export default Routes;
