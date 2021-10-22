import React, { useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

interface DefaultTheme {
  name: string;

  colors: {
    primary: string;
    secundary: string;
    background: string;
    text: string;
  };
}

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
        <NavBar />
      </BrowserRouter>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
