import React from 'react';
import { AppContextProvider } from './context/AppContext';
import BusinessCard from './components/BusinessCard';
import WebDev from './components/WebDev';
import IntDesign from './components/IntDesign';
import ProductDesign from './components/ProductDesign';
import NavBar from './components/NavBar';
import Resume from './components/Resume';

import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <div>
        <NavBar />
        <BusinessCard />
        <WebDev />
        <ProductDesign />
        <IntDesign />
        <Resume />
      </div>
    </AppContextProvider>
  );
};

export default App;
