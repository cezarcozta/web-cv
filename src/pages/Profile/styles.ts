import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200vw;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Media = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  border: 3px solid ${(props) => props.theme.colors.primary};

  @media (max-width: 640px) {
    width: 150px;
    height: 150px;
    margin-top: 30px;
  }
`;

export const Social = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 150px;

  @media (max-width: 640px) {
    margin-left: 0;
  }
`;

export const Quote = styled.blockquote`
  margin-top: 12px;
  font-size: 28px;
  font-weight: bold;
  border-radius: 8px;
  padding: 0 10px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};

  @media (max-width: 640px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

export const Left = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0 45px;

  @media (max-width: 640px) {
    padding: 2px;
  }
`;

export const Right = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0 45px;

  @media (max-width: 640px) {
    padding: 2px;
  }
`;

export const GitHub = styled.a`
  margin-bottom: 100px;

  transition: 0.2s;
  :hover {
    opacity: 0.6;
  }

  @media (max-width: 640px) {
    margin-bottom: 10px;
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

  @media (max-width: 640px) {
    margin-bottom: 10px;
  }
`;
