import React, { useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';

import Header from './componets/Header';
import Main from './componets/Main';
import Footer from './componets/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'dark' ? light : dark);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header toggleTheme={toggleTheme} />

      <BrowserRouter>
        <Main />
      </BrowserRouter>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
