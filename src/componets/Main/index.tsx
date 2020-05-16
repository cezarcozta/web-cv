import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Routes from '../../routes';

import { Container, Content, Section, Aside } from './styles';

const Main: React.FC = () => (
  <Container>
    <Content>
      <Section>
        <FaChevronLeft size={20} />
        <Routes />
        <FaChevronRight size={20} />
      </Section>
      <Aside>
        <hr />
        <nav>
          <ul>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/hard">Hard Skills</Link>
            </li>
            <li>
              <Link to="/soft">Soft Skills</Link>
            </li>
            <li>
              <Link to="/languages">Languages</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </Aside>
    </Content>
  </Container>
);

export default Main;
