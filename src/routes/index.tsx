import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import HardSkill from '../pages/HardSkills';
import SoftSkill from '../pages/SoftSkills';
import Languages from '../pages/Languages';
import Favorites from '../pages/Favorites';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Profile} />
    <Route path="/hard" component={HardSkill} />
    <Route path="/soft" component={SoftSkill} />
    <Route path="/languages" component={Languages} />
    <Route path="/favorites" component={Favorites} />
  </Switch>
);

export default Routes;
