import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

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
