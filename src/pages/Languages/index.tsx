import React from 'react';

import BR from '../../assets/BR.svg';
import UK from '../../assets/UK.svg';

import Container from './styles';

const Languages: React.FC = () => {
  return (
    <Container>
      <div>
        <h3>LANGUAGES</h3>
      </div>
      <div>
        <ul>
          <li>
            <img src={BR} alt="Portuguese" />
            <span>Portuguese</span>
          </li>
          <li>
            <img src={UK} alt="English" />
            <span>English</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Languages;
