import React from 'react';

import { Container } from './styles';

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
    </Container>
  );
};

export default Nav;
