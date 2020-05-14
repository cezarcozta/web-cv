import React from 'react';

import Container from './global';

import Header from './componets/Header';
import Main from './componets/Main';
import Footer from './componets/Footer';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default App;
