import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 5px 5px 5px 5px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
  h3 {
    margin-left: 10px;
  }

  blockquote {
    font-weight: bold;
  }
`;

export default Container;
