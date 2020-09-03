import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;

  margin-top: 10vh;

  @media (max-width: 640px) {
    margin-top: 8vh;
    height: 15vh;
  }
`;

export { Container };
