import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200vh;
`;

export const Media = styled.aside`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  border: 3px solid ${(props) => props.theme.colors.primary};
`;

export const Social = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 150px;
`;

export const Quote = styled.blockquote`
  margin-top: 12px;
  font-size: 28px;
  font-weight: bold;
  border-radius: 8px;
  padding: 0 10px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};
`;

export const Left = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0 45px;
`;

export const Right = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0 45px;
`;

export const GitHub = styled.a`
  margin-bottom: 100px;
  transition: 0.2s;
  :hover {
    opacity: 0.6;
  }
`;

export const Linkedin = styled.a`
  transition: 0.2s;
  :hover {
    opacity: 0.6;
  }
`;

export const Facebook = styled.a`
  transition: 0.2s;
  :hover {
    opacity: 0.6;
  }
`;

export const Twitter = styled.a`
  margin-bottom: 100px;
  transition: 0.2s;
  :hover {
    opacity: 0.6;
  }
`;
