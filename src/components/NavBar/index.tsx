import React from 'react';

import {
  FaUser,
  FaMapMarker,
  FaUserCog,
  FaStar,
  FaPhone,
} from 'react-icons/fa';

import { Container, Nav, NavList, NavLink } from './styles';

import Profile from '../../pages/Profile';
// import Location from '../../pages/Location';
// import Skills from '../../pages/Skills';
// import Contacts from '../../pages/Contacts';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <NavList>
          <NavLink>
            <FaUser />
          </NavLink>

          <NavLink>
            <FaMapMarker />
          </NavLink>

          <NavLink>
            <FaUserCog />
          </NavLink>

          <NavLink>
            <FaStar />
          </NavLink>

          <NavLink>
            <FaPhone />
          </NavLink>
        </NavList>
      </Nav>
      {/* <nav>
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
      </nav> */}
      <Profile />
      {/* <Location />
      <Skills />
      <Contacts /> */}
    </Container>
  );
};

export default NavBar;
