import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Content = styled.main`
  @media only screen and(max-width: 640px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
`;

export { Container, Content, Section };
