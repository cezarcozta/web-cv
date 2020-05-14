import React from 'react';

import {
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaGitSquare,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';
import { Container, Content, Section, Aside } from './styles';

const Main: React.FC = () => (
  <Container>
    <Content>
      <Section>
        <ul>
          <li>
            <FaJsSquare size={30} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
          </li>
          <li>
            <FaCss3Alt size={30} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
          </li>
          <li>
            <FaHtml5 size={30} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaRegStar size={15} />
          </li>
        </ul>
        <ul>
          <li>
            <FaReact size={30} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
          </li>
          <li>
            <FaNodeJs size={30} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
          </li>
          <li>
            <FaGitSquare size={30} />
            <FaStar size={15} />
            <FaStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
            <FaRegStar size={15} />
          </li>
        </ul>
      </Section>
      <Aside>
        <nav>
          <ul>
            <li>Profile</li>
            <li>Hard Skills</li>
            <li>Soft Skills</li>
            <li>Favorites</li>
          </ul>
        </nav>
      </Aside>
    </Content>
  </Container>
);

export default Main;
