import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 45px;

  nav {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    ul {
      padding: 10px 25px;
      li {
        height: 10vh;
        list-style: none;
        color: ${(props) => props.theme.colors.text};
        font-weight: bold;
        font-size: 38px;
      }
    }
  }
`;
