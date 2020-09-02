import styled from 'styled-components';

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;

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
  padding: 0 45px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: 35px;
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
    text-decoration: none;
  }

  span {
    padding: 0 75px;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;

export { Container, Content, Aside, HeaderRow };
