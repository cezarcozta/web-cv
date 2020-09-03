import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 45px;
  height: 75vh;
  width: 100vw;
`;

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
`;

export const NavList = styled.ul`
  margin-top: 25px;
  padding: 10px 25px;

  a {
    transition: 0.2s;
    height: 10vh;
    display: flex;
    list-style: none;
    font-weight: bold;
    font-size: 38px;
    :hover {
      opacity: 0.2;
    }

    svg {
      color: ${(props) => props.theme.colors.secundary};
    }
  }
`;

export const NavLink = styled.li`
  transition: 0.2s;
  :hover {
    opacity: 0.2;
  }

  height: 10vh;
  list-style: none;
  font-weight: bold;
  font-size: 38px;

  svg {
    color: ${(props) => props.theme.colors.text};
  }
`;
