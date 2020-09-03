import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

import { Container } from './styles';

const Contacts: React.FC = () => {
  return (
    <Container>
      <a href="https://wa.me/5511985935067" type="button">
        <FaWhatsapp size={100} />
      </a>
      <h1>Entre em contato!</h1>
    </Container>
  );
};

export default Contacts;
