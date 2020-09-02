import styled from 'styled-components';

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0;
  border-bottom: 0;

  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    margin-top: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
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
    margin-top: 30px;
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border: 5px solid ${(props) => props.theme.colors.primary};
    border-radius: 50%;
  }
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

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

export { Container, Content, Aside, HeaderRow };
