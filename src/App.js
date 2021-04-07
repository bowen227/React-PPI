import { useState } from 'react';
import './App.css';
import Navigation from './components/NavComponent';
import Hero from './components/HeroComponent';
import Association from './components/Association';
import Coaches from './components/Coaches';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Association />
      <Coaches />
    </div>
  );
}

export default App;
