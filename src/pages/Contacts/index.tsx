import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

import { Container } from './styles';

const Contacts: React.FC = () => {
  return (
    <Container>
      <a href="web.whatsapp://wa.me/5511973328747" type="button">
        <FaWhatsapp size={200} />
      </a>
      <h1>Clique acima e entre em contato!</h1>
    </Container>
  );
};

export default Contacts;
