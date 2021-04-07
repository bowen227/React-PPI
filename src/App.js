
import './App.css';
import Navigation from './components/NavComponent';
import Home from './views/HomeComponent';
import Login from './views/LoginComponent';
import Footer from './components/FooterComponent';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Home />
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
