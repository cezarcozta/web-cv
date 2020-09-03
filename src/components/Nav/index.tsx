import React from 'react';

import { Container } from './styles';

import Profile from '../../pages/Profile';
// import Location from '../../pages/Location';
// import Skills from '../../pages/Skills';
// import Contacts from '../../pages/Contacts';

const Nav: React.FC = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>Profile</li>
          <li>Location</li>
          <li>Skills</li>
          <li>Favorites</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <Profile />
      {/* <Location />
      <Skills />
      <Contacts /> */}
    </Container>
  );
};

export default Nav;
