import './App.css';
import Navigation from './components/NavComponent';
import Home from './views/HomeComponent';
import Dashboard from './views/DashboardComponent';
import Login from './views/LoginComponent';
import Signup from './views/SignupComponent';
import Footer from './components/FooterComponent';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(!isLoggedIn);
    this.props.history.push("/dashboard");
  }
  
  return (
    <div className="App">
      <Router>
          <Navigation isLoggedIn={isLoggedIn} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login login={login} />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
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
