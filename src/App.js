import { useState } from 'react';
import './App.css';
import Navigation from './components/NavComponent';
import Hero from './components/HeroComponent';
import Association from './components/AssociationComponent';
import Coaches from './components/CoachesComponent';
import Footer from './components/FooterComponent';

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
