import React from 'react';

import { Container } from './styles';

const Section: React.FC = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>PROFILE</li>
          <li>HARD SKILLS</li>
          <li>SOFT SKILLS</li>
          <li>LANGUAGES</li>
          <li>FAVORITES</li>
        </ul>
      </nav>
    </Container>
  );
};

export default Section;
