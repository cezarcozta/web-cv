import React from 'react';

import {
  FaFilm,
  FaFutbol,
  FaCocktail,
  FaTv,
  FaGamepad,
  FaBookOpen,
} from 'react-icons/fa';

import Container from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <h3>FAVORITES</h3>
      <ul>
        <li>
          <FaFilm size={30} />
          <p>Movies</p>
        </li>
        <li>
          <FaTv size={30} />
          <p>TV Shows</p>
        </li>
        <li>
          <FaGamepad size={30} />
          <p>Games</p>
        </li>
      </ul>
      <ul>
        <li>
          <FaBookOpen size={30} />
          <p>Books</p>
        </li>
        <li>
          <FaCocktail size={30} />
          <p>Drinks</p>
        </li>
        <li>
          <FaFutbol size={30} />
          <p>Soccer</p>
        </li>
      </ul>
    </Container>
  );
};

export default Favorites;
