import { useState } from 'react';
import './App.css';
import Navigation from './components/NavComponent';
import Hero from './components/HeroComponent';
import Association from './components/Association';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Association />
    </div>
  );
}

export default App;
