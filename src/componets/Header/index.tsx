import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

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

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, name } = useContext(ThemeContext);

  return (
    <>
      <HeaderRow>
        <Switch
          onChange={toggleTheme}
          checked={name === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.secundary)}
          onColor={colors.primary}
        />
        <div>
          <img src={BR} alt="BR" />
          <img src={UK} alt="UK" />
        </div>
      </HeaderRow>

      <Container>
        <Aside>
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
              <FaLinkedin size={75} />
            </a>
          </span>

          <span>
            <FaEnvelope size={40} />
          </span>
        </Aside>
      </Container>
    </>
  );
};

export default Header;
