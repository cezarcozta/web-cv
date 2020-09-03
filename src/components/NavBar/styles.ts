import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 45px;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 8px;

  @media (max-width: 640px) {
    height: 12vh;
  }
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

  @media (max-width: 640px) {
    display: flex;

    a {
      justify-content: center;
      font-size: 24px;
      width: 10vw;
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
