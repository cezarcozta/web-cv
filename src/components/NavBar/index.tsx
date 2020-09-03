import React from 'react';

import {
  FaUser,
  FaMapMarker,
  FaUserCog,
  FaStar,
  FaPhone,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import Routes from '../../routes';

import { Container, Nav, NavList } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Nav className="nav">
        <NavList>
          <Link to="/">
            <FaUser />
          </Link>

          <Link to="/location">
            <FaMapMarker />
          </Link>

          <Link to="/skills">
            <FaUserCog />
          </Link>

          <Link to="/favorites">
            <FaStar />
          </Link>

          <Link to="/contacts">
            <FaPhone />
          </Link>
        </NavList>
      </Nav>
      <Routes />
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
      {/* <Profile />
       <Location />
      <Skills />
      <Contacts /> */}
    </Container>
  );
};

export default NavBar;
