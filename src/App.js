import React from 'react';
import { NavBar } from './components';
import { ChakraProvider } from '@chakra-ui/react'

import { Hero, About, Footer, Photogallery, Team, Services } from './container';

const App = () => {
  return (
    <div className='app'>
        <NavBar />
        <Hero />
        <Services />
        <About />
        <Team />
        <Photogallery />
        <Footer />
    </div>
  );
};

export default App;
