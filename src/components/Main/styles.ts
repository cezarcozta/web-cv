import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 450px;
    height: 450px;
    border-radius: 50%;
  }
`;

const Image = styled.img``;

const Social = styled.aside`
  justify-content: flex-end;
`;

export { Container, Image, Social };
