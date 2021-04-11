import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/NavComponent';
import Home from './views/HomeComponent';
import Dashboard from './views/DashboardComponent';
import Login from './views/LoginComponent';
import Signup from './views/SignupComponent';
import Footer from './components/FooterComponent';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function LogUserIn() {
    setLoggedIn(!isLoggedIn);
  }

  function LogUserOut() {
    setLoggedIn(!isLoggedIn);
  }
  
  return (
    <div className="App">
      <Router>
          <Navigation isLoggedIn={isLoggedIn} logout={LogUserOut} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login login={LogUserIn} isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
