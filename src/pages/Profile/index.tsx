import React from 'react';

import {
  // FaGithub,
  // FaTwitter,
  // FaEnvelope,
  // FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import Img from '../../assets/perfil.png';

import Container from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      {/* <Aside>
        <span>
          <a href="https://github.com/cezarcozta">
            <FaGithub size={75} />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/cezarcozta">
            <FaTwitter size={40} />
          </a>
        </span>
      </Aside> */}

      <img src={Img} alt="perfil" />

      <h1>César Augusto Costa</h1>
      <h3>JS Developer</h3>

      <span>
        <FaMapMarkerAlt size={30} />
        Santo André - SP, Brazil
      </span>

      {/* <Aside>
        <span>
          <a href="https://www.linkedin.com/in/cezarcozta/">
            <FaLinkedin size={75} />
          </a>
        </span>

        <span>
          <FaEnvelope size={40} />
        </span> 
      </Aside> */}
    </Container>
  );
};

export default Profile;
