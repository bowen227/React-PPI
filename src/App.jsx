import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './components/NavComponent';
import Home from './views/HomeComponent';
import Dashboard from './views/DashboardComponent';
import Login from './views/LoginComponent';
import Signup from './views/SignupComponent';
import Footer from './components/FooterComponent';
import PlayerDetails from './views/PlayerDetailsComponent';
import NoRoute from './components/NoRouteComponent';
import TeamDetails from './views/TeamDetailsComponent';

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({})

    function LogUserIn() {
        setUser(JSON.parse(localStorage.getItem("user")))
        setLoggedIn(true);
    }

    function LogUserOut() {
        localStorage.removeItem("user")
        setUser({})
        setLoggedIn(false);
    }

    return (
        <div>
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
                        <Dashboard isLoggedIn={isLoggedIn} user={user} />
                    </Route>
                    <Route path="/signup" exact>
                        <Signup />
                    </Route>
                    <Route path="/playerDetails/:id" exact>
                        {isLoggedIn ?
                            <PlayerDetails />
                            :
                            <Redirect to="/" />
                        }
                    </Route>
                    <Route path="/teamDetails/:id" exact>
                        {isLoggedIn ?
                        <TeamDetails />
                        :
                        <Redirect to="/" />    
                    }
                    </Route>
                    <Route path="/">
                        <NoRoute />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
