import React from 'react';

import {
  FaFilm,
  FaFutbol,
  FaBeer,
  FaTv,
  FaGamepad,
  FaBook,
} from 'react-icons/fa';

import { Container, Left, Center, Right, Text } from './styles';

const Favorites: React.FC = () => {
  const size = 100;
  return (
    <Container>
      <Left>
        <FaFilm size={size} />
        <Text>Animes</Text>
        <FaFutbol size={size} />
        <Text>Futbol</Text>
      </Left>

      <Center>
        <FaTv size={size} />
        <Text>Codes</Text>
        <FaBook size={size} />
        <Text>Books</Text>
      </Center>

      <Right>
        <FaBeer size={size} />
        <Text>Beer</Text>
        <FaGamepad size={size} />
        <Text>Games</Text>
      </Right>
    </Container>
  );
};

export default Favorites;
