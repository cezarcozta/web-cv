import React from 'react';

import {
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaGitSquare,
  FaStar,
  FaRegStar,
  FaCss3Alt,
  FaHtml5,
} from 'react-icons/fa';

import {
  Container,
  Hard,
  Soft,
  Title,
  HardItem,
  SoftItems,
  Text,
} from './styles';

const Skills: React.FC = () => {
  const sizeIcon = 45;
  const sizeStar = 20;

  return (
    <Container>
      <Hard>
        <Title>Hard Skills</Title>

        <HardItem>
          <FaJsSquare size={sizeIcon} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
        </HardItem>

        <HardItem>
          <FaCss3Alt size={sizeIcon} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
        </HardItem>

        <HardItem>
          <FaHtml5 size={sizeIcon} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
        </HardItem>

        <HardItem>
          <FaNodeJs size={sizeIcon} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
        </HardItem>

        <HardItem>
          <FaReact size={sizeIcon} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
        </HardItem>

        <HardItem>
          <FaGitSquare size={sizeIcon} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
          <FaRegStar size={sizeStar} />
        </HardItem>
      </Hard>

      <Soft>
        <Title>Soft Skills</Title>

        <SoftItems>
          <Text>Comunnication</Text>
          <Text>Empathy</Text>
          <Text>Open-mindness</Text>
          <Text>Accountability</Text>
          <Text>Helpfulness</Text>
          <Text>Team Work</Text>
          <Text>Creativity</Text>
          <Text>Patience</Text>
          <Text>Time Managment</Text>
          <Text>Problem Solving</Text>
        </SoftItems>
      </Soft>
    </Container>
  );
};

export default Skills;
