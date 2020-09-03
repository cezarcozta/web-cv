import React from 'react';

import {
  FaUser,
  FaMapMarker,
  FaUserCog,
  FaStar,
  FaPhone,
} from 'react-icons/fa';

import { Container } from './styles';

import Profile from '../../pages/Profile';
// import Location from '../../pages/Location';
// import Skills from '../../pages/Skills';
// import Contacts from '../../pages/Contacts';

const Nav: React.FC = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <FaUser size={30} />
          </li>
          <li>
            <FaMapMarker size={30} />
          </li>
          <li>
            <FaUserCog size={30} />
          </li>
          <li>
            <FaStar size={30} />
          </li>
          <li>
            <FaPhone size={30} />
          </li>
        </ul>
      </nav>
      <Profile />
      {/* <Location />
      <Skills />
      <Contacts /> */}
    </Container>
  );
};

export default Nav;
