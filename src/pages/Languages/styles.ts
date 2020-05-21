import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  align-items: center;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
  li {
    margin-bottom: 5px;

    img {
      margin-right: 10px;
    }

    span {
      font-weight: bold;
    }
  }
`;

export default Container;
