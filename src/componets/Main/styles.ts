import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex: wrap;

  border: 1px solid #d3d3d3;
`;

const Content = styled.main`
  @media only screen and(max-width: 640px) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ul {
    list-style: none;
    flex-direction: column;
    flex: 1;

    li {
      align-items: center;

      svg {
        margin: 0 5px 5px 0;
      }
    }
  }
`;

const Aside = styled.aside`
  flex: 1;
  justify-content: center;

  ul {
    list-style: none;
    flex-direction: column;
  }

  li {
    margin-bottom: 6px;
    font-weight: bold;

    a {
      text-decoration: none;
    }
  }
`;

export { Container, Content, Section, Aside };
