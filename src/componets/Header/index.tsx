import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import Img from '../../assets/perfil.png';
import BR from '../../assets/BR.svg';
import UK from '../../assets/UK.svg';

import { Container, Content, Aside, HeaderRow } from './styles';

const Header: React.FC = () => (
  <>
    <HeaderRow>
      <Link to="/">
        <img src={BR} alt="BR" />
      </Link>
      <Link to="/">
        <img src={UK} alt="UK" />
      </Link>
    </HeaderRow>
    <Container>
      <Aside>
        <span>
          <a href="https://github.com/cezarcozta">
            github.com/cezarcozta
            <FaGithub size={30} />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/cezarcozta">
            twitter.com/cezarcozta
            <FaTwitter size={30} />
          </a>
        </span>
      </Aside>
      <Content>
        <img src={Img} alt="perfil" />

        <h1>César Augusto Costa</h1>
        <h3>JS Developer</h3>

        <span>
          <FaMapMarkerAlt size={30} />
          Santo André - SP, Brazil
        </span>
      </Content>
      <Aside>
        <span>
          <a href="https://www.linkedin.com/in/cezarcozta/">
            <FaLinkedin size={30} />
            linkedin.com/in/cezarcozta
          </a>
        </span>

        <span>
          <FaEnvelope size={30} />
          cezarcozta@gmail.com
        </span>
      </Aside>
    </Container>
  </>
);

export default Header;
