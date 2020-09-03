import React from 'react';

import { FaMapMarkedAlt } from 'react-icons/fa';

import { Container } from './styles';

const Location: React.FC = () => {
  return (
    <Container>
      <FaMapMarkedAlt size={100} />
      <h1>Santo André, SP - Brazil</h1>
    </Container>
  );
};

export default Location;
