import { useState } from 'react';
import './App.css';
import Navigation from './components/NavComponent';
import Hero from './components/HeroComponent';
import Association from './components/Association';
import Coaches from './components/Coaches';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Association />
      <Coaches />
      <Footer />
    </div>
  );
}

export default App;
