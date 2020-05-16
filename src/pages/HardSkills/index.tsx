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

import Container from './styles';

const HardSkills: React.FC = () => {
  return (
    <Container>
      <h3>HARD SKILLS</h3>
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
    </Container>
  );
};

export default HardSkills;
