import React from 'react';

import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import Img from '../../assets/perfil.png';
import { Container, Content, Aside } from './styles';

const Header: React.FC = () => (
  <Container>
    <Aside>
      <span>
        github.com/cezarcozta
        <FaGithub size={30} />
      </span>
      <span>
        twitter.com/cezarcozta
        <FaTwitter size={30} />
      </span>
    </Aside>
    <Content>
      <img src={Img} alt="perfil" />

      <h1>César Augusto Costa</h1>
      <h3>JS Developer</h3>

      <span>
        <FaMapMarkerAlt size={30} />
        Santo André - SP, Brasil
      </span>
    </Content>
    <Aside>
      <span>
        <FaLinkedin size={30} />
        linkedin.com/in/cezarcozta
      </span>

      <span>
        <FaEnvelope size={30} />
        cezarcozta@gmail.com
      </span>
    </Aside>
  </Container>
);

export default Header;
