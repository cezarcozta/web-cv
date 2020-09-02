import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

const Content = styled.main`
  @media only screen and(max-width: 640px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

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
  display: flex;
  align-items: center;
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
