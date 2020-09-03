import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200vh;
`;

export const Hard = styled.aside`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Soft = styled.aside`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    margin: 0 10px 5px;
  }
`;

export const SoftItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.secundary};
  font-size: 22px;
  font-weight: bold;
  margin: 0 10px 5px;
`;
