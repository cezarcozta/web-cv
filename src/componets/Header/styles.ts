import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 1px solid #d3d3d3;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    margin: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: 60px;
    margin-bottom: 25px;
    width: 150px;
    height: 150px;
    border: 5px solid #d3d3d3;
    border-radius: 50%;
  }
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: 50px;
  }

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export { Container, Content, Aside };
