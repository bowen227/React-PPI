
import './App.css';
import Navigation from './components/NavComponent';
import Home from './views/HomeComponent';
import Login from './views/LoginComponent';
import Dashboard from './views/DashboardComponent';
import Footer from './components/FooterComponent';

function App() {

  return (
    <div className="App">
      <Navigation />
      {/* <Home /> */}
      <Dashboard />
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
