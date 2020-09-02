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
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
