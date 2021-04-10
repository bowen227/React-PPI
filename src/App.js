
import './App.css';
import Navigation from './components/NavComponent';
import Home from './views/HomeComponent';
import Footer from './components/FooterComponent';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
