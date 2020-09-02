import React, { useCallback, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'dark' ? light : dark);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header toggleTheme={toggleTheme} />

      <Nav />

      <Main />

      {/* <BrowserRouter>
        <Main />
      </BrowserRouter> */}

      <Footer />
    </ThemeProvider>
  );
};

export default App;
