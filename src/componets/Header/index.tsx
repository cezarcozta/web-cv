import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
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
          checked={name === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          onHandleColor={colors.primary}
          className="switch"
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
        <div>
          <Link to="/">
            <img src={BR} alt="BR" />
          </Link>
          <Link to="/">
            <img src={UK} alt="UK" />
          </Link>
        </div>
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
};

export default Header;
