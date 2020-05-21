import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  align-items: center;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export default Container;
