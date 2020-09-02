import React from 'react';

import Section from '../Section';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>Dynamic Content</Content>
      <Section />
    </Container>
  );
};

export default Main;
