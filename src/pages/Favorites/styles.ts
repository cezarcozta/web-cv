import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200vw;

  svg {
    margin-top: 4vh;
  }

  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50vh;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin-top: 1vh;
  font-weight: bold;
`;

export const Left = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 45px;
`;

export const Center = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Right = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 45px;
`;
