import React from 'react';

import { Container, Image, Social } from './styles';

import Img from '../../assets/perfil.png';

const Main: React.FC = () => {
  return (
    <Container>
      <Image src={Img} />
      <Social />
    </Container>
  );
};

export default Main;
