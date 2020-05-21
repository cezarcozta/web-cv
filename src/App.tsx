import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from './global';

import Header from './componets/Header';
import Main from './componets/Main';
import Footer from './componets/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
