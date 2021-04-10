import './App.css';
import Navigation from './components/NavComponent';
import Home from './views/HomeComponent';
import Dashboard from './views/DashboardComponent';
import Login from './views/LoginComponent';
import Signup from './views/SignupComponent';
import Footer from './components/FooterComponent';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
          <Navigation />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/signup" exact component={Signup}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
