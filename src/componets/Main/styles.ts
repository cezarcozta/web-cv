import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1200px;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 750px;
  height: 175px;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;

      svg {
        margin: 0 5px 5px 0;
      }
    }
  }
`;

const Aside = styled.aside`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    flex-direction: column;
  }
`;

export { Container, Content, Section, Aside };
