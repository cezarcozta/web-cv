import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    width: 100vw;
    height: 100vh;

    background: ${(props) => props.theme.colors.background};
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    font-family: 400 18px Roboto, sans-serif;

    svg {
      color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: 640px) {
      width: 100vw;
      height: 100vh;
      font-size: 8px;
      font-family: 100 18px Roboto, sans-serif;
    }
  }
`;
