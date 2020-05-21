import styled from 'styled-components';

const Container = styled.div`
  * {
    margin: 0;
    padding: 4px;

    display: flex;

    background: #1b1e23;
    color: #d3d3d3;

    font-family: 'Roboto Condensed', sans-serif;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export default Container;
