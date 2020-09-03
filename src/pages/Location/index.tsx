import React from 'react';

import { FaMapMarkedAlt } from 'react-icons/fa';

import { Container } from './styles';

const Location: React.FC = () => {
  return (
    <Container>
      <a href="https://www.google.com/maps/place/R.+Santo+Andr%C3%A9,+430+-+Centro,+Santo+Andr%C3%A9+-+SP,+09020-230/@-23.6652583,-46.5282969,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce4262d4266d1f:0x8e40d1cc72f183!8m2!3d-23.6652583!4d-46.5261082">
        <FaMapMarkedAlt size={100} />
      </a>

      <h1>Santo André, SP - Brazil</h1>
    </Container>
  );
};

export default Location;
