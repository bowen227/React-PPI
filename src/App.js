import { useState } from 'react';
import './App.css';
import Navigation from './components/NavComponent';
import Hero from './components/HeroComponent';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
