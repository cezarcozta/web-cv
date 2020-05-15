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
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { Container, Content, Section, Aside } from './styles';

const Main: React.FC = () => (
  <Container>
    <Content>
      <Section>
        <FaChevronLeft size={20} />
        <h3>HARD SKILLS</h3>
        {/* <h3>PROFILE</h3>
        <h3>SOFT SKILLS</h3>
        <h3>FAVORITES</h3> ]
        <h3>Languages</h3>
        */}
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

        {/* <p>
          Aenean libero justo, tempor in ornare nec, ultricies nec tortor.
          Pellentesque vulputate luctus urna. Sed nec tincidunt libero. Aenean
          ultrices condimentum quam, fringilla placerat lorem iaculis at. Proin
          urna augue, consectetur id viverra at, hendrerit ac magna. Praesent
          rutrum enim ut ornare feugiat. Quisque pretium malesuada augue, at
          egestas tortor gravida nec. Ut in lacus lorem. Nam et odio lorem.
          Morbi faucibus enim faucibus nunc venenatis volutpat.
        </p> 
        
          soft skills

          languages

          favorites
        */}
        <FaChevronRight size={20} />
      </Section>
      <Aside>
        <hr />
        <nav>
          <ul>
            <li>Profile</li>
            <li>Hard Skills</li>
            <li>Soft Skills</li>
            <li>Languages</li>
            <li>Favorites</li>
          </ul>
        </nav>
      </Aside>
    </Content>
  </Container>
);

export default Main;
