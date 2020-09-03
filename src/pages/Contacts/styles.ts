import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200vw;

  h1 {
    margin-top: 10vh;
  }

  a {
    :hover {
      opacity: 0.6;
    }
    transition: 0.2s;
  }
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 1vh;
    }
  }
`;
