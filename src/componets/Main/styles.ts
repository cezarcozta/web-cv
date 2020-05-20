import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d3d3d3;
`;

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 1250px;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
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
    width: 200px;
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
