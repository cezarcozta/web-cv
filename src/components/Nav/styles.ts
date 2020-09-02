import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 45px;

  nav {
    background: ${(props) => props.theme.colors.primary};
    ul {
      padding: 10px 25px;
      li {
        list-style: none;
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;
