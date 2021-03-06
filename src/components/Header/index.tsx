import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

import BR from '../../assets/BR.svg';
import UK from '../../assets/UK.svg';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, name } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        className="switch"
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
      <div className="flags">
        <img src={BR} alt="BR" />
        <img src={UK} alt="UK" />
      </div>
    </Container>
  );
};

export default Header;
