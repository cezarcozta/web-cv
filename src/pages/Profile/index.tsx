import React from 'react';

import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

import Img from '../../assets/perfil.png';

import {
  Container,
  Media,
  Image,
  Quote,
  Social,
  Left,
  Right,
  GitHub,
  Linkedin,
  Facebook,
  Twitter,
} from './styles';

const Profile: React.FC = () => {
  const size = 75;

  return (
    <Container>
      <Media>
        <Image src={Img} />
        <Quote>JS Full Stack Web Developer</Quote>
      </Media>

      <Social>
        <Left>
          <GitHub href="https://github.com/cezarcozta">
            <FaGithub size={size} />
          </GitHub>

          <Linkedin href="https://www.linkedin.com/in/cezarcozta/">
            <FaLinkedin size={size} />
          </Linkedin>
        </Left>

        <Right>
          <Twitter href="https://twitter.com/cezarcozta">
            <FaTwitter size={size} />
          </Twitter>

          <Facebook href="https://www.facebook.com/cezarcozta/">
            <FaFacebook size={size} />
          </Facebook>
        </Right>
      </Social>
    </Container>
  );
};

export default Profile;
