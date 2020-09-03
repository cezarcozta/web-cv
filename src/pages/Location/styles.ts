import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200vw;

  a {
    :hover {
      opacity: 0.6;
    }
    transition: 0.2s;
  }

  h1 {
    margin-top: 50px;
  }

  @media (max-width: 640px) {
    margin-top: 45px;
  }
`;
