import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Writing from './components/Writing';
import Speaking from './components/Speaking';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Work />
      <Writing />
      <Speaking />
      <Contact />
    </div>
  );
}

export default App;